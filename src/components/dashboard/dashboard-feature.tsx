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
    "uWk12v7XLY232EHq8H69rHCWrmJ8Kip4mdFqw58JXEE7bme5nfbTvRWYrS1SgqP8hdykdk2Qb8RQVzgdb2dYhf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XtFds8en1WDQH9NXf9AMFFdtkvqYeNgJFwSRnxigw52b9P1qtB5JtNJbjj1Vc4WvM4LsgTpm79XZM9zaK5cHMVR",
  "key1": "3BqnqvbgA69rzCrm45f9AMiq1XAoAZTAKUzuZCDaV1wmHGpJSyzZY8YRpmAaoAvGz9dCXhyDDzPmLBgFaNegQ1Vg",
  "key2": "t3bUwcVT4MJEMZUgUB1sjYWnLr7XPVKVMML7dCrsNTWizR4zdUD1tnVQ5MAwqEHHnsfCsTyDRKbwGd55PJrxrtz",
  "key3": "2tm7TBL7UGBJVGv29s893DFa612jno6v11yEmPxjpc4EhoNEQNhn94jE5SMwRnUxwYYyue2kyutVi4j88sZiJn77",
  "key4": "227WAw4G6CgQTv4yTyLn48koaaMWbc5u9AsxJSsstFdUzus5c3rkCh3Q8NmoyZA2YsmMidchXvrRovmfFX9qNqQC",
  "key5": "HaqhZf7agBaEmRS3gkUpjQe13UFzaKSgoZ46QA6iST86pGVKb8UiXBo7T65x3TFAFweEVHto8EqdSABGUFY2qGL",
  "key6": "3WNSeK4G4HqoGyXnF1N9c52RYHDhTkFV4Xw96iJYEtWyCLhnG2RQNMHojkQYnrneG2rk2kxxMPwR48sK77e9mDke",
  "key7": "4KnYa8sGNfceQ1ALsdMu6N2fjSHMiurqQLFc16Tu5nLZnD1sVBp9zBmwgzycyyAFkUfEwMLtdEKkD4iriHFceH8h",
  "key8": "3RGFvD4XkCCB9bWJHtdHdfmgkhekRRXiXQgDTso3LeQ8e9EfGYTJLK9jeerw2EuaMFKqamGrHrjWFo4LYV3RykWD",
  "key9": "3e6TutGoMHUHnrS94bUGjWy5z1HbU1unCL8oCYTWYbSGEBb2LNgqRkKppku6Xcmbp1Ybj6EFfaZjP94dmb42Leej",
  "key10": "5SPwSGK26o8oRn4GnmRTmeA7r4fuTrhWt1b5qGWstJy9gwWDeMqyMwY9zQFNtPwinHvK6KjG4AwgSNZpXGskM1NG",
  "key11": "718SyVZ8Z83wJ85LNhC1y6vQUMic5oYKBSv9UssEVSWNDAY74tw4nDicxmnLLWzEBVQwFdA3fPwRJBgQRJHPAbf",
  "key12": "2rXr6ZRLGbwehHLAbgYJ9euDPeTf4wBoijF52wacgWTRGtxm3crRaVYrbsRZ5119HPc4t1SZwuzDV8QUBMKqLXgf",
  "key13": "7ndQVhYBUbvyiBRbRWnySnapYgnPeY3UwVNxV9qc66Ca2pPeFgqnQEg2JSVAQnPpjxGt2vuuoWLc42KURkR5Abx",
  "key14": "2vk2aA5hzaie35Wek5LrXahHwd2fg8cNeEANubzM7rqZTK32sSKbs6kBZQF2XuQURGxrcefoQgM44yXhAa2iqeeC",
  "key15": "5osyABLiD1WKNMfZCTd9ymLU7zsTKDmyFMzNfjXw2VeCMtSNNhJBfFbhHfF2uXwEEoSf2iXRjFaSXdoFZkqXoRbE",
  "key16": "4JcJRpimJWy6WzTHSmXG7JNnvyr7e21XZMsUMhA5JLfqoz4XQW3FnWKKvcGpVbtKmcqvmPdEKa1hEHy49ZYrGgp8",
  "key17": "3xTHKyTjfcFQ14ArPkzySxEqybSRe28WLy9mZLMSrCJkUbSWHr8iGLdpoGH3i1Brpt5w6C48SzsTcN5RgFkr3BxF",
  "key18": "cJQN4FsahsNPUnASepS2j6kdapQuQ16uDB6dwdCvWpEJgwVGjWjeUS3AQNsZXBr9FS9ofuKM3KuSy3uTTdEacHZ",
  "key19": "36Evqi5gL2DeQZXtF4YD3aVnPBLEzw1F4s71zxp5uRwxtMuKp9a1nfidZGzzXX94wvru1UjbH3cHWLPonEC8dzGF",
  "key20": "2k54LHQYQ3Sc2uxMJ7NPmvEJ5hZFUvgXo8mjMuLnyAGUTHXPNub6BBhAThrhadq7WQ9GngXiNLmtkTvny5yBdJ5P",
  "key21": "55E3Cddrjc8bb7zSUVKNosA9BUDUz2cE6fFJfeN35WwKeGBAjGWePVRLn8K2NXGbbHaVG4H5Tb611NVbuzxJR8AU",
  "key22": "5K4uJNwPgk7FaCHd7LBzHyh5k6EHjGuJvudXL12JE3Ei3CyasTTAJfD9CFat4z6wNRWGpYBihg739NGRFuwUB593",
  "key23": "4jWXWGseAA4Caz1Mu8X1imndk5V8TCfFFfJuSmLNfXNyk7QKrScaUgiv6oEULXMfhi8ogwvxhMZELdKTHXoyWYWZ",
  "key24": "kAmbfMGKcsWYywQVYfuV92BSjra54mN7TGiGr6SXT6726RcmsqiggeTTw37s9UEkKQxP3j73CCttedRbUU4VXxA",
  "key25": "5pHuRX7xuBuDC3P71Mbiunm7RgBnco9CCe4mraRGZRtfDaBP11azJmQyPnr7sSkZ9pB7RE3zLXDcL8jrkSctvjB2",
  "key26": "2Sfinn7LLFPt6gLvmLKauZBqPiuA6HwHm2JRg8fbw2SUVQomDpa5aPyx2UxNrq8WcpfmHj8mMx9sp9TUsKgeE51f",
  "key27": "2C2v6JKG7dXANgxLEaYa5fiiYFjpkMsDuqhhU4DRhGCBZFy9MkA8UqZavBZWExnAKUeiZZNC1ePXEz8pNxNGQr9F",
  "key28": "68gUx7L4B8Cp5Er7YUMS9i7Stsh4ipWjeWyWU3X1WBPsWeALTEyhh3Q2oiMxdXxkgi7ed6h9FKXRQpPHdLQpk1s",
  "key29": "4GLoEAJ1Pbk3a8z17WaoFsLPhzukefyVg3EUGTXQwSZiJRjkCdJbLTz3fxdipxR3BTyHeP1i1ZNnKsdBksbRTHt6",
  "key30": "4AvtqSj9YtAWVopziqif64i8HJspL3Lnok7A3rAWN3pXCDMBWonp9oUMAQqgGyLjKzLivEZdFtyaNhN9tgDRs1yk",
  "key31": "4kbpC8fhiGTjaMrv3hsuhffes2srRz1rSKTWNEgpb7q82XJ1Hz1Gx9yXEFdGEUvjmW2daFDKcwmU2DwCF3UVAkEP",
  "key32": "2tukLRM1cxVMY9oiqWu3pn5WqwrwY7voVwHqA2N9AwwpCFZGQeqCPeFe1hot232BrvfhqnZEJuyeQMyXMd6wGbRJ",
  "key33": "37jULHiuS9DAAasNJtkFJZVTEJEMfjoxx7SJtY6K7YG4hogwYc7ymeaJjBFjg3ejav12nBMfJ4ZYB8kFTQdWyT6r",
  "key34": "2qyQdQFoXgZpYrK5UygQP8aXjfTm44N2metAXzZoAQxHCT6fja7oZb7TmEzS9aLme1A93ebHyFabsNsAnMiY46Be",
  "key35": "Umv9ACoW2D8cwswJgpvP8RX8pAWxxU7qoxkSwDQ2EFmKrUUXM54mwoF3BeT9Yux3eddJd1Y3dBN89ZzfGCajhSM",
  "key36": "2XSbNo8bBU2VsidFAZZri8PZwwLPukSs2zG1CddLuLNY93HHc77PdL4Xe7dVM7yZ69dEqCE5WPugY4hLR3yYEhhc",
  "key37": "RSBNDjEfdb3icsmKC7xnKPEnZLwY3pK5UKEHDWy3vbkMCHCWHBjjQLJaC14uTQsw4EJh4cK65haPxg8qu4BbDLz",
  "key38": "UskHYCSbWSu4zA6PrfwayEToJjciJdQgte3DU358XdTFLCwXHPePgUBXYGApxaQr9NQdH3jXr4XsCDMqSV2wzRx",
  "key39": "5DGhPPUG2F2bzQRCXWpTAGy8rgSU2VN6hgwDSW3nMKMYdEUUwCEtQp5bayuobxGJMQt6qsVd3MV7avjYGmTYdJZf",
  "key40": "XVcYoru2zhUSgCPtzWiR1DdszbUHR8pLafJKxoh6qbRJLaEFwT5qshMqX3o9tFJchYo4bLWcR6w44gshr8xN46r",
  "key41": "5UdZkX1EQAsXinFUZBjSp5tJPA5dzUScaym2kfVKbND6qqsoZT9qZp7oJZQy5yHDe3Da4yfMeLEtzboK4ZkfKxKB",
  "key42": "65E89jVS4YiWB64omDb1ccH5ftgBENpb9Pt4qW8Po2gExB7pWrHgAuYvDnL7TTA7tseKfuJEy1Sk5owQRUA4UviW",
  "key43": "55dc2K1FPsage4N5a7YhSsgFoerKKcfpLqJstEjcRMTciG3zaCLzgURFVRZBdNkzFZKtXGk1A5m8c2De2M2HKRfG"
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
