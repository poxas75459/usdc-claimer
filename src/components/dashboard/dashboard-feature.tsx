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
    "fPTwfafKAiBCrfC62WG2gmLaPiezuEH3kWKhBDJJtkvEia1F2vfCcwjfgHSoWhAWXMvQNBSCiAd7H2H6FBN8RNk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UCwyGLr2CEYUpsooDKCWXhGCC5gAtUYFVqFXaa9PVhCgFFDjMZPLDVaoCQAFH4wx6JAQCYqFjCgRvTruh4Fducm",
  "key1": "3y95gZggm41rzMWouRuYZ7WgXP7YApzGLxFs6hLrgAeeRi1cC9Mraf6SCR6rU5yT9uXvKRBEJdwjEe8dBZek4XwP",
  "key2": "3kQ6CprW2zJf5NyLeq97msEwtbLEQfHq8XmD7JjNkDqbj9kbE5XATyp5eDYks2eZBeWavUbL3Sn73iorgUKk5H2J",
  "key3": "3J3TJP38rNungK9pWZbahDCwQUsgff33USsD1ZsGcaDJYAoWMDhrLd75pZypGgtiwZXzzdVsoR8M7KmuMdKJM7mP",
  "key4": "3aWwFW5DZg7gRTyj1xYxeyE9V6moBepW7Jpz9N3QXA7EcoR9Wg2wJjKhMmufJm3RZjAVvLwezGVUmtXTo2qcaCqJ",
  "key5": "2cvbykA13TBrvFFdC3Vx6LTfFr5wXbQrxLdNEiuKHhkcyTH5dVL7FbxsdgahhRMFwGN7bgQ6kduZD3hMo1v3stVH",
  "key6": "2mhEuJczUgAfkP76hMW4q3VD2PMqeZkPh34CJrGvhVbA6wpgZVH8CdhgB72de7mXJJt9BiKxAVJTpvPFSZjYCruH",
  "key7": "6UKC1TBEb89uNs1qP9Ls2uf6BWBXqptGPX1AmHAyRFDv8hs7yr4Zim4AA5nDh8uBmPtKaozGQF1gS8jULfzaBtn",
  "key8": "5DbAacKsuSdLw1ACWUWwdE9QamfLDbQsaHDRauhKteR47rn8TpSFBsPqczLa5RqYLT11DP7cG238ASgHX1vXNzCU",
  "key9": "4g1t7DRT96m5FHZD4bf5oBho5i9CEQLRo9zo9JbktxSkak7icLTugkUZAm1umSKtkkwnd1GVvBRp68FGASv6SksP",
  "key10": "33WntqJZAgERDUxV558gXAqzo6awpAmVXxVB9RmGsRtsrc78qcMfmzhQUq3wcQ7u8ESSnYrxQ1HeoKferrDJ3rt3",
  "key11": "3TyDQy2hoaY9KLG3jys8AEHd5Z9cSx17EXTA5UbehVkfvzd8u8dqghqDteU8TZpoLPAi4pyXDQh3yn21HSAM9fA6",
  "key12": "4nXrPKD2qkd6K1q2Ce1GGYVzfKLgimZvL1Sfigkjp3ULmpgNjDgASW5TmwVUJGf8qYz5wjQmNbqv1WwZPJxzPUQW",
  "key13": "3LYFKaixrAD6SGiLxzCqEyjLzKArBNAXk1PHtDxgNPgeqcHJrJCig9fqUoy5Dwv4hTycKGiecHEmR4e4wmc5Ajrd",
  "key14": "22p8XaGrs1mWskZW7XcGHwgKhAe8oZQvMZsAxptqVDYv4r867deVxLE2A9KcaHWSS1ZdhpNbznfR28mi7bnDqKDK",
  "key15": "3Mdg5GDm17e1NT9gGgSb2ZM9AuTm8M1AK7EEL81bP4CJE76bT7wXCEYmVzUcFtdRjwBHVvnUCMXeipf4qgEieEau",
  "key16": "5N8JTPbRdGUzCupRriKbvd1ANN3SnhvbyBruiEhQ6tS5V8yxTW4UcUrjngj154MVdifSE3gDz6BnEzM8yA61uLLS",
  "key17": "kBQwTdsMhRGT11JuBRm22r7DFwKHW9tTBLSmznNbid8CAouDqViZWVnkrJJAcWEgctXp8tvN82P67nnUodzHwRG",
  "key18": "44unFJZdgyeMYZytzih6K9rqFCXff8MFgGtveKerfqUYmorZgQHad3cLDAMJPrEWcJkTevwPTZWGmhx4U3XwdXA",
  "key19": "yXnqW4LgzFDnsTPDfvewnmUm8HjPfwzL1TqgZEoVmV6i8CZ9rxV35qt2fsXRtiU6w9MVksPhce4mDqMyNXKv45V",
  "key20": "3mtXjoinRXUNuSSNb5sFFazHnnMsEwDXT8n271Mz4AjSrUWM4saUwRJEJRL6PXFEXComFFg6gmENuFVrrfdeE2g6",
  "key21": "2NTb8zy4x3zNF1D2wWABasBXSPqRugdXNNVusnbvpbpsmqaYh6sAAZpM1SbNzouc84vczgV8URo5zFbtfKBu4CXJ",
  "key22": "42ap8e4WjFWhWvz1H1Mczhb41z1N1bB7p4Uo7QQAJC5fTFdCwvjMpwzjKPi1A827d8vRpd4xFUn7fFwkYYFBEbW7",
  "key23": "3n6LegPdvnpa7nhXrLLX5AADRTJWnPsSsghqJBk8r54hcfB6KMru1jMRmk5mGVBnw4FNPNGa12gJ8Vw2B3TB9tMF",
  "key24": "5sr7zRssNCVRsLpsAimfhLABdTWFw8JTuBAUHS2t8scLbv7mThQv92ZnaYvi1bYu9bqCcoDaoRDmXSxWomJy6NSz",
  "key25": "4vY6QhSzHBRmfWvuixSh1LJ96RBFrKjeYZQYdFAv3TXpPjazHFeZCrT5tKYCtGYjVZY1aSfAELpw3ZWqyybA5oEr",
  "key26": "2V4QaaTPPKQu2KEyMGSBWpNnCKCB9UzPsr3mRZLhctLwF4giQaHN3vq4Wt6SKRsrk4Jgti7xUhYe8Ajgvtuvsa6F",
  "key27": "67GPrDrQef4ScaW8BmgijfY5PgTnK3Fo7Fzcvf5pW96LVBc67d82okpUbt7yhwmxRW2w5z6hx234FHdY82r2HaHc"
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
