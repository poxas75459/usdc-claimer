/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "2i5ngiu3HVwLZGhpGMPoBnsaAbnK64gVB7ui2XTJoKcD3aqKqLJUMXvo1wwECmJMgCa8U8mPPDuAG6nVzffGi68S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D7i8f6FNvH9WaJyQp4yqWkhYL2Zv9PjAnferw9i2fqogY7JNB57ojBJS8qpqFyiy5B3EZ2u2tV5qAVK17wfrhU",
  "key1": "52pmnEQ5jRMN3QccxWDLozNagyzsTxRWHwB8Zdun4NtQccigVk8KmbBqfr9GqP8vDaDJZJBvXsVK9DvoY5Z7Wm3u",
  "key2": "25aFnK19sRanF2fw2jzwpVVvAeNF9bgok48GeMQYVw1GY2kuFFmSdhPwcy3L5J51apxMekw8ghKK1Pzuvfn2trs5",
  "key3": "3AmVPPNcvwzSHWvhr8dn2UARd72NcomGinpToxmDG4SYqscdBqXjf2GK1Xw4zZsUsVUsnBYATy9v6QBbLAhHLoNt",
  "key4": "4nZ7MLw6ueZ1CjRFFjNMNQoEFTRLbUzt1duGVsqaTYB7uGh42XDzTVWAYiNPHG1n1GRRbPWiBkC1sdPmcqumLJjp",
  "key5": "2nXjqBjAjevPTSqqMLEEdaRNtuyAZsm6Q1ZJUaPiARKWj2UWYZuq6RynZvt3m4Dh27WyPPxDgvSYmd7LGZaSDf9v",
  "key6": "N1SEW5jHhFwNq5nkjqkYEnvK3BNoueBtsKGEfyJwe7zZNhdUUQSVLeWXAvuBR5JjbKXsdSmT1CrhrdLWL8u6L4q",
  "key7": "475MWyxCcrmiFQv4JUL1QP4cTXxdGdXpdjrZztPoGYR5UMkhHNK6cE6N6ZY18Aiy1AvGjua3AbJtCvACQ4C7DbfC",
  "key8": "3NEQWUmXcYAFkVQKgBFmH8riJATcjYRF8y33jqEbeUMRfwghnRfnPqYdf3g3PXCHVEwnHFeXaDcnshsxdqPLETjm",
  "key9": "5J3LT5gkm7hVzDP84L1iJGESH9JUeNkxMfHLfMSaFsDQ9nCabfRTn1rCXbS6NTU97GVQ2eN3nmZNZd7Niox2MzRD",
  "key10": "5UzARq8CDMiPY3KvJFPJMvTtNXYXUDWmFMBEfFuVjFNFtUvabwasxwS9ScaL4a9QTYG9vVkn87PYZA2UKjBDfBvJ",
  "key11": "67PbRXq7iG89YMcCYZVDpV6cRynGhj9ygbPbRBbW2TeLU6TMWR3uqfyFSBo9JSn6Ay67dv7iV4YfzgwivG9fzRDg",
  "key12": "5hdhjGXXMEm1Y9Podv4Dm8o9EKKjzKoXkZNSKNcFDZh578uBVJLYSqNbid1eJKqsZf98xnSp3EZBGL9fzfMrqjtA",
  "key13": "3HjZB1se8skG9NzkwWWhN4tgvpeyFFG95aABeHorb4Q3QA8kJpK7NvYBR1N1SCFKAZwpzSYdkNDJqi3n8GvmPcDy",
  "key14": "2TsjYwgB7XNYdDvFQ1VMobqdsKgL2Hjg8G42vY2QyqfJKD5NFKU92d8mLy1V8Sj83w22vLACfbWFTkza3FJzGJTU",
  "key15": "2M2oNUsbc6Br9m4zmaupA4KtmyqNhYFrGabSeyfYVvx5ZSkUEfihcSUA4UQreVXqF99tV645iVpgrRrvYLjAMZc3",
  "key16": "4xyw1E5gNtu2P6coQY8ixgZ9hQkFaAa47qDkHFbtKGJKmVmyaSrcZrTNbESRKVeJGTfWm5T6QqfNMNFRKfJ4eCCe",
  "key17": "4P6BpQ9QZVX3xDDaNh9xAqR1p3wSAikY3V3dkHEpXamV177TVqoMPzaUYp1BMz3B7zS98ZwkSxJHxFkLKka8BnWF",
  "key18": "5arbPkCCguBMpZpEJFCwV3ZdCLrVHEYfs4z7FJRoqmpQbK3Z1vBmBTuiR1GeARguVH639imQUr5yUm46N7uxErPN",
  "key19": "3QpJ9rmf21KvK5Q9XQU4kmUkBXYxLjsrBswDPfXA8qWxbSMKAgGgHVNMjCtLn6XVKQn7mAWYoYPZvz6zs23uiJ9C",
  "key20": "44aEVXP8FUQMu95Ktib8SWzUc1YgH5RxDYb6hoeczvh8AsAWaXPkHmD42vWvmi8DjU3ADLGpj2EuYhR5XwiCtBoC",
  "key21": "2KDud8d59GvGQo9mYm4kzWDqHifDtwKoZzptkzKmCsniFHV439mJTqQDzo7RKgVC7NpBWis8CnJGRzsuqHPFEw7N",
  "key22": "5XpkfhLGDyeYWVnk9dX8SwSG9PME7ZmhWoUho8fNK8VZF8JuvxU7jFCHdiCoNeQP8FAhYDDDSbLf9WYMLDZqu8w6",
  "key23": "2sSmMdfxpmhAUiNHXFrWA8U5vL9rk9SwqYtMKt4fSmL2MGFP57hGDEwTqri78sN6MkPX8eWiy1NGBHswki7dWu3i",
  "key24": "35e4zQca8Wz4C9mmmZMoyrRpkdFJn9wNnLstAbxDSaBXX2mrnFqr5fQmvEXMjhy8oQAvLtnJNTaiyhVhguLs4zrK",
  "key25": "3RSsanKjfNPosiRyw1fLF6QYChU3VaRiahZRw1Xy6ZBWEmB8QZsfJ7SKYdCKivKc42inE7gBifseNikZycigEQDK",
  "key26": "MA1No65zhFuexGcmSYNM5TBS2No1PTSApWWidWMX7RZYS3KQUykQ4rajpUhVKbWg9FxPNgSJMnVkBLdikkZ8dm2",
  "key27": "2fTQzvktGwxGhESAQJiDnnUUbeYddrGWPJakZVu8pec5bVZiLTKuGn5Bpihqvmj4Emr327CU9RCEipRgE5FHxFjU",
  "key28": "3En2HMCW9jZCRXi16dvxAK5TgT62H49cCSek3VuRkt89JPigCSSenF27g9CX42yMdZrUVFoJJTeWRWHz57PVKhq6",
  "key29": "5RfVn4NmEPwWxJKt62uzpnWTi4Gfn78Z1AqZfoiWC7WEtYQnCL2bcXkFNSrPsTRcJtoEySQPYrwvGcmJRzR1eGLw",
  "key30": "4mU3hQvbXicnxs2qZSf4Bd2r6QeJDq43f8BLcmn16RyZEs956PRH1vi3FMURyCzqZMMEf38inBKtQXLpLH3e5GDU"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
