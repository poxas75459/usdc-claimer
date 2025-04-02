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
    "551qnD52L4A9UataqnHwxocpqF88TNM3bTkPgRzbpeRXGbQ3XdEXUvY67xSMAa9uM5bYUWkKZGRxqbTH9RCeuFkG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EWvvaGjtJ4qtpUmcwdx1QL9qdaHV75xLGFRH5xJJumrRVqNYJHXHswdU9QMGB88FBqRydNvMVpNquJ9DtowTgu8",
  "key1": "4Bcti32VLzDh8UF5s7S26tHRBbzCPzf99omJLViYiAozgr9aEfHe5BkqQS3NW2hpVVu5yFLtbB4SYmqCdVYkJSDp",
  "key2": "4cpnnKcKPo25cgErjZKtfc2bV1m6z9g2Cmsav28jdhVzsHXwdmqR9ZfUTkvfE734PKKYJzWf5zvGNsX5pKmHKLdj",
  "key3": "Srz9953zuEFcQWPkqS2HtZ3y8vdN3vDfyZyTvUVH1bZuyDGC3ii99qzUas2fLihZiUPW46f8tnSSrJUgW9HDNU7",
  "key4": "2ebot18ui2613tamhnrprJbUxE1C4ZNq1SPEpkpfHkHgHinyCZU8iDqRqBHBMVnUra8ZdA4LsZH1sSCuUdyQzWAv",
  "key5": "spYc6EcSdUWDpAwcKjh3uDdXT6kmYdSWmiUJp5QzntcW2YGmi17yEtVEEodgFfXJz2mCt4pfwqE7K2v9PVGi7ag",
  "key6": "4Pivt7r97brBmCtwDVgmXuZUrtW4sUFGKWceG4n6v82ybnoGZdpZuo1gHSDwzWoAKba6bMWBrzo5WVmatnhpTai6",
  "key7": "4D3rZD61Uk8a6gtpZ7Wpdjaq4LZ1yfpKzjCDGDNYh3zgJtK9zLUXP1R7XCH2ebxhe4PKTSzBMxdU8qVS6iJwKpXR",
  "key8": "4znciofxkev1Kw8akM8T2jVmPVdSxv9kvMPbzPHNxiMtTsHbq6yevpRVAbJXCKcZf8d3TQWuFbwniiokrUtLEugz",
  "key9": "4Ge5EXx4yPK7GZtYohZQiFksTQAsMz4MyoybBRNLHL1GGn1uM3UinygbhwwU8GbNDczvxXAayTUrPh2gwws3Yhgb",
  "key10": "4jjjAdPKZv1eh4bkYWzb1cfk77deU7Jyab5xSZYq1VBLLTad6DK7bxVmd8mwEwyfDzfmxG8U8JvM1Wr97JzZa4fV",
  "key11": "5jQH8YxS5yxvwnrB1ryVPJJ69FyFJWNuYdpo64ty4RcHBxEPs9mDc4PU8zMdAw7UG8pFGrJMXMZcfdqz1uEzqNMB",
  "key12": "5mchPaTSHkm1HxcV5CUfx2oyHdFmJsnjzeJbei6ySQoJ8tMmqDmzHTuzZ6y8tmCYo2wzDMgnHKPvNLaUDixzHGH2",
  "key13": "5TiHhx1CyZewFScN8T9qdHJn3RquvtoteRxmpaGbymf2JxoKx2wKDYJFFRqTg9L5XH2pRtHSpTs7Rzkjtpmfan6k",
  "key14": "4QLgM9zQSPJYpZr9pAM4qk42ohPk1cEa8CCmEqGN5fpKPbFAkkk73FR6g4q4vKw4Qh4ZgRmhgz2b8j37QVt228gM",
  "key15": "4TLimg17RNuGXYgTTYRTE936tC6hJuThhVPLbYJiVLZM4Pej5butSboscANyaq3AxaUVH9sZpvTVPL97WUbjR8wk",
  "key16": "5L9B4VfDjfxVe6VVk7FUaxuMThAFhTRfeWvxqzy3y7VhMq9LWsh2qqSPDouqniuRpgEkS3b2sEm8W3hvj31XnPvC",
  "key17": "4higkEeoUnqVzg1twZWpNu5sQAnu1iPmsRHZhhydnigydmsK53F6U2ri1yUMeqWQGJK2uRSzuGtRmRgDwPFaMhGg",
  "key18": "vmBhHbnAQK6rSX7c7nomRHeWhVsfUMLWHfNv95svmV8MkVMgkcnvyUVg2XayGz2YHUD9WfdviUWnHT3eJaZgKro",
  "key19": "4vxmG4rD8zwkH4xjq99bQhgetb8x8ZrHoeWpgxrBLGSWWToo1d25NZqsgdUyu6ii51CBPVkM3H5zGNCdU84oMFvh",
  "key20": "2dQf6MmB5miZttcE4WRGW5rYho6vBN2Zmq5c1XhFxXfNVVaPq62arLxtyPPtoqHVUTMNZd24J1jHJpjs73WRVX1d",
  "key21": "5sCbEzCZAbfHR4JYvSuw3UmmrZ9jPF8D9WMktGEDpsCiD8Ndu6szimULAKoACA9jp4N3K5Svbv3TgyoaNVKrY13g",
  "key22": "3DkVxo6ERgjnwSXCc71VrFWXdSHHAoSspG5v1zVYD6aKUnnhaZxteWwtbMeNFzbFmAJ79pjUjmHgQ98Cpde9Pd2S",
  "key23": "oNngqjH6xwB1Mn1cCcvnSFb959A4rrZVnapo27TzVm8S5UqMWactruiaApXoRUb9pz28GrpF9SfuFNGHZBZR3Ck",
  "key24": "5WAX4NyxMfB2vZemtzVtvWH12a9aAcGmSnrwKA3VfALZY45pYWAZE3Dmg6ghEwnNnyJ7GyhmwZeL6TZMcwZaD16x",
  "key25": "2WF2DirNZGfdVodqZvzhnUissYX8CL4xA1nCgCzzv13ouiUZsjSk5Pf4BFS1BiUKXprW3NYrdqRcL5ZbHPHvTLry",
  "key26": "2yVAv4thaLupmS5KSZ91EkSzLku9SqAKcJ1LHVDZUkr6BCQFXoayugT9UstVdJv6rxHBaoFsAKqF2h2mGobwBZmD",
  "key27": "3K7wCLhDNVkxpJHRyCyiixoHCaM2DGd798i7SSMGLGLwBCmmgJ6e1UYWPeNmXQdmwAgXUtmirwB79cE2qfpdQwCE",
  "key28": "2MTt8VdgYZ1AZwhfKE3LEcsm7XaiitbzDtbCBBmaXL2K1zMqsWHkBqWjBYtSztYd7gWh5EZ3CEbrR7UzWZsHT587",
  "key29": "3qCCXRMLu1H9GHkQwZELBfQuCFnsKwYur3wwpFFXR9iSLDr6vocD6hiYTSEGSmqU93HETRhYURuV7R85Kejw71iB",
  "key30": "3niwAANRVrcU579uHrxqjjtGQiY7bagxesmYqvw1faA8Sdq7rYamQoJmdUk5SWb1ENkVQMsr62xJwhJotKK8gb22",
  "key31": "5EWcCwg9H6KdXZQDZWzwDhid48bZvCqWMpqSuunRjSNXLp3PqSUnsjg7h8TXaGsG6XWh5L69Fzr7B7uLiSdMktgs"
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
