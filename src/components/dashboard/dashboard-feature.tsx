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
    "3qVu9gc1tmeT3zn1AAqKokUWy1areuR3gQaFGeyJRTX2Fauk67fZY8MFASjn9hvTUgUmLRaC5s29VPZmKmF7Y25w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BqpraumdKmU5CfhDFSmAuknmdxhx7pMWSajjEMFmP3chJt6CvXAH3NMi5UiV7Mp6DmiUQgCHnGCTXFyJumHzou2",
  "key1": "3kDhDdaQrV72SXaYmi3xTo4eik9tQwjCj4cnhzgGMgcipBFr5stNN4QT1GxDvoZduUvE4oP9CZGRiGoRvYZdAbBD",
  "key2": "2AKMiJunN6MB8LxerTR7etvJ5y24HHm6BYgQJZw3SVVooHvBTcPRQeUjrZ5SwL7iREM9zSGoXc4hXz8SQTmYAwAZ",
  "key3": "4T5umRZmrJimcTtz78SKQW95AK2qAveS5RFvK5twAkdybjpnGmvXGBBPm2Eps9BHZXFYPjtZAnnnrUJP3ZNEqU1v",
  "key4": "jEa1VBxmEpQ2LXjfztXiEviAPQfKd2F3DtyHCDwcW55zGF1ToohHtaPHWywZunRDqJkRBxno7RT8Qk6sQqgsEKp",
  "key5": "223T7sYXz8UGPdb3u44cLibzpAATdqdGUC2ueQ4seYePybT4fjJgt5qXKHnWc9DUmxaaSQhRJFdJAkbptbFoWH4Z",
  "key6": "5sdV1YQt7nmtVqPVAXKicVgCh58qcvoPPq8nfgzLzPQA71fVU8FJJCXgU5vo3cFunL6Tc5TwVoC94QmCRNUVvaUE",
  "key7": "4VJjWyiUq1DKy6sowp8e9rAmGxtm4QjSeeDApvNU9kihA5KtMjmdfmtkw6ZjQqgR3gT3mwhskJtwvNDi6AeXMYQ",
  "key8": "332XJa4XCk4fFKdSX9qArMrB7HQAvqfUzN66op5hCcWWavyUkLohmsHtr1V3SNpzQ5KdpXj7txgZxLcczRNQH6vM",
  "key9": "5n12AHncQaYn9jn2v93yqqfiJLw5cnbVguzkv9LaX5YNGXGYUQeVhkgZEMe5aUYPERCtReSM95vxNBAJNsgWQyhd",
  "key10": "3bpxnQC6LfAXgZxwDBrNBehq2fPiwXYd4Z7bzdbZSVEHR6PcG4P9s5qDruNrjKSB2A5cGSbUJG68MBkjN4yfjzj7",
  "key11": "246pFjrFQ8v3rwaPahjU7rYGZVYhC9zATEBipnaDwx17bPkMjaEDNiLq5NSfJrtMZZC2kAcde4zP4MSAXz2p1zwS",
  "key12": "4PEiseHm6mQnpgvLWkjsPv9LJkBvibnpjxf9crpMqF8MK3eM4foQmjvuo4KecP19BjPHCZ55SbK1iyKiGJJzTe5R",
  "key13": "4pP7Kz68Q1vBCNZS4gHVHaQMQZygeJRjEpEsMKrA3C94SDmNBHigZmEvrMdujDX2nx8rFKBo5w6oHKi9m9f6MfuU",
  "key14": "2oTZ17HCkVzt6uQQCJeqgh4JkcumAJsxksKtaqqjpn9CzAMo4N6gWAWN7SNQU5P9o4AQM6sYZhqbewDkznstMhmn",
  "key15": "D72fW1om8ygejVwDgLEEuVb9boGonCGLttVGVerncJTZPudoJDVFFcPerEXuRirMMR9DAyUhz1SG3pD2u36LXDS",
  "key16": "2k6eMTfgzduexdA1GizEX4uRa6w2YR6oCgmutZe1b416xwCdMHZdiTXtpzTU144rA4vPgTxnjVb9rTcJmagesvgZ",
  "key17": "54NaZveViiyw2Kwt63LH1aU9pzhJFGwzcTPRjU55sdRH1M9cvzvL2Z78gRhyYALJbtCKXj94jB52kPdj1t5XCz1a",
  "key18": "61Wre5n8SBfswzs2sP3dKbVkbHqR25ayEqPiFVrXj6xrnKwwPQYPWKAUmmEAiDsN3Pe6ipcUtAMKYpKJ7bnUvK9t",
  "key19": "5nKQxCVpTmr5FtLtH8cZjB2D3AmBsASjpATvvqP6GL8j1wxcUAjUhr9Sr792zjdtxKjS1kvE5ZwAHqhUdumESuzQ",
  "key20": "aDnVvE7AfDbyFrY7j3PuvCUqpj5BAKTSzqMHYQGVeWKktBr7AgLtU1SnqK9fzpmgUagYCKtd8HbgD5ZGb4y8psY",
  "key21": "2qguRP5zbtZsc65zuVvmvyua4yJccWLsaRqj7bRqe8V2NL2NAUT1aSv5GnDkg5RdMi1hXLERqZig3Aatk3kzaKyy",
  "key22": "33dG4Eq1WEqxiitfEnRpU2kb8ZTtDsJwuDnatuxzFAYYUQLnjptZt2BN8wc9fALm7DswMz7gkLFUWNSBiKx2puAX",
  "key23": "61oQk7a2ivHct8GDDCLcyp1mTra9vooYkiLyStaBZv3wWYXUJ6SRwoczqYqnTGkH7z2rbGcxHBTZEa3cDnYUwGeC",
  "key24": "5JAeWrs9PD7AZ2QpHAvRgDD9SqLKpFbxzdPLwuKVAP9TvFfeXqy9aLbN8KDCdRUvc3XzdpsSNkckZm8uvstHcb3j",
  "key25": "4Mb1TqQUD5kDNoh3HhJJPXNUc4pZ83xWa2n61ZeKaF9c9kZZzU8A3m5XERqemsnBK33XyGDT4joUQskMrSY7xxbg",
  "key26": "2UF8iVNmk1fhYpzFjBKcbtMaVSJ226YLziD1RmpjsMUxorPrNHwtwRiM7d5TzyPuP3LVWCM5rEey8YgVDjZSXpXf",
  "key27": "2DpBNDrHHPG7JuyS7gqF6UPkNevos4nJBeVCZJPSjTYvXTDV9XyXdSv17Zp7KgRmBmKmAKnjmDq1ZgygydRUzFSo",
  "key28": "4KaDKEuLNhHhodk3Q8QsXvZLFhuaQJdrfbU742Jp8hbJNapK4etkVQjmVFb3fiJKEj5FWRmDyDKg4oBugUcWYL6Q",
  "key29": "4oAyo7xitpVmfixm2cMXDc6AwF31TUHFBPUZoYSpUSY7Bi39nFq7YWUkPQKqfGbuXXbjgVhg6aBQAKzxc2AzYiuz",
  "key30": "24o1bPkBgfTBV78v3S3vYqePWSe2C6WYVVFjZPFBZeyPC5LEp8fvcY9A9aw3PgkRzS8GfqWFk5kW7h6js4EbQD4P",
  "key31": "2BFPtVUYmdyf4sFDLVotJogErWvMCPX3DQaPsR7G1zAKyJxFV6sshQSzgzq8e7DH5DdDMFST1ECTd3NLsuAHtKFe",
  "key32": "4MvMFoHjA4iHtsLcTxCcdEgHssthBnW4BkurZrP7ABgy8wUUa3kzukKtKi8EL2Z3XgEJXmX9kZdefGBLLJq4mFFD",
  "key33": "wULL4H7jNb1cKmHB2gRGjipmcrv5W3AQD6z4ZTV5qgbMEMrocKTGvxAZGQPMb99eRMQ2MCmnYV9uvh7XVipH4vS",
  "key34": "qzuvE6FEzwuWSXFKEYS2rt7xBpKoUXKiqm6JNK958JPP4tenVSRcYnC9iLcHXg4CTKgdLCkEw4fzXtH1SxKkj33",
  "key35": "3iEVrYQSDcYNA76UkpDiVW6piu75Wzh8UqGGa9jAYPXpPK17qwCuoDUqHVni93SQvdEeBoeZhUr6YWbwEPvVYh77",
  "key36": "5Qavn2zMJQ5VZjdXFX6NLBZxiX8663HiUBw8x2zyPgcYBxGnN2Ge7TnvM3P6uZVz9g9mTPwE8XBH3wWDpbLH51G2",
  "key37": "EHN6PVa7pe3wxy75WteF6PAxeBYEzvpFRy3RNecbqoQgBVy3KHets9QHbqW1hTnttZ3tiYMjVteAA4CMLZC1mCQ",
  "key38": "6n5oLGFxdNWMEALDRx62ENp2VMzSkegEbK2yUqJsHH7R3Rnh8hsZLUtsjowwUHKy6gbXf6TUw4NyoXqc4vQTUPm",
  "key39": "58jEQkqgd4vPTpJW8g6Dgd579cvVrw2Ub6AdoiscEk1r3XnvUDJapTVEVFDG56X9idk66J8YPYjgiddPHV2pYV2G",
  "key40": "2dZuUWBjjtoAdgbnTrC2WDHHpuV9LH6n4gDC6JSmi4TkkYGLygRmmEcC3sXxuUagHDXfQq5UyjRKf5EY7xRPm7jd",
  "key41": "2syrr2PUbpNTV7JfnWjPro9aCiTLkrVHvvvTWyMGLCUJwYRE5RKuyFXDAvXGPthst74C4dt8fj57id9DrB4Bddyi",
  "key42": "5UVNHz23XN4ZqpEP56g6kxZ3eVZyQpUAgYGHYNFKXprisT2sUcb7pP9496WNUFaq6N9kcxQLLhhVekd3o4kpF8xz",
  "key43": "4yN23Krf2U3og4HhdLMjzhVJaTYEC36DpMFjmGFrADyEj9MY7XsZqvUbr9Y5C8E2HKoHWRL9V4jxsYnaqac8zKq9",
  "key44": "3giqJiBALQRF66RTcPUmgW9hNEiDxC65TBnjc2tfScg95McCALAYFmB1wDnqd29u75XqPeHNSikyREtkkBRRGbaC",
  "key45": "5LJxh4d5Zj4gUnsf3UXRxv9uNcpjxCEW4V5bxXGC3HDX7DntwbL3LxmsNMJVpjNVHCLaBLoVVePqxYa262v3G4W9",
  "key46": "4aryFw96KE8nMP1ksJwM5mRCkB7feHA6A4CaTUnZPnJZKooY7ph8n69gDAdohVE1kJaShp7DNmtBfKyTwFfJvHCQ",
  "key47": "hy7sHFyiMWipUt1D9g3YrhiG8oorvKrFEzzGHRnoRPR7UztZbSNaRYxt4m3xiMvT6JDJ6cLqpR556uLgkQXox1Z",
  "key48": "3JRgdXf6NWZccb6pNM3SFgcX4AYmDoWJ8biveVaCKZLz2JFaSr4ySvnUhKZWJrFeCXAyqounuNQ5h5NGHSgjixzW",
  "key49": "dGsYjyBgf71FmLH2gVmRTJYSRu8WcYzhA9saoTQKBGRmZ5LURmV6BSx2t7kCxZvwA8LJTqjAatozDdi14TzcsLF"
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
