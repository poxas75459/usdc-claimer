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
    "13tbGAW1FKPdDsdnK9XZeFnBWwX9MjZTxnFoDKaq4JUsQz1oiCbTVTx7ezPDLkhKyp5iJYcJdKWUbiTwr3hHRMP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zxZMEucviX51g9b6ReQWGzeWFor4pDv7BnjJbYTcAxPJKSrya2TYBbR21gW6WXNK85B6Ljf9RLhT8smVgibz23v",
  "key1": "3P8Udfa5aXkJhdDUYQ1ghvNRRW5J5DDcGDGiDF99sHuwRw2MBX75NB6ZxjrGJgtqvvDupi91wTSNY1mdnbEy3LGe",
  "key2": "5sadKojtuh21aNELQU2X27CJA154h4WPhG2C2T9s3UZtk5pU2aU66WSNio4R88AfCpuXmhTNcurFtxc75ZZp42i2",
  "key3": "q4T6H32J4VRByAe8TQiq9bSXh3cUUWpGVgQM5hRXKGA1Apng2ydgGjgPL4drSGkhBg6B1uPWkwi9XcsrEZyF8Yw",
  "key4": "5DfriHXP35ZjMWG6Wh6hV6edkrCTxPRbDLDcWXk57ukDdTJaD7JhT9qtRv4XrM8b8yELJSeCicBAW48w28VoAcuN",
  "key5": "5NDMsHidDD14iFtjosEc9vWsk5K9Y7uL7cZ5NmckJooQGrA2FYrkh44VfM3yPVBJa6GhxHDQZFzSXPB3M51ibsU6",
  "key6": "4p3ZD1YLvEv9zgduty3DxGdwGSug1k3Deio4VUfBtZ7YHmyiC9ZJFh5hsAyk57UXKoiva8T2eRJQ8ZHqKNJMWgWk",
  "key7": "36AdxBRm3wBm2N3aKBL2DgqMXQfztUSyQdoUpxTK7iW7idWWub2fZH2ki7rWTfTRSDo58KmTKpGm7x73ZxE8AaYK",
  "key8": "55jMJv5A9qCV816fvp6nZdScgNFt2LLVjcpgp6sQURh5W71uaFQ7G5rbb7xzasH691RMeG2aS6n8KXGV734uUhC",
  "key9": "2NFRZqop3aV16sYa1ZFxefWsox6dtA1swWabPp15aH98tBncYmJQGwgi1a4cWWyYSPHJYPys5otcoG19ohMRTb1x",
  "key10": "3DmZkr4e3LGYSDHW2xehW7Ty4c3BJSYHLgVekSk1Qqgp4XxZXU1MCiME1ia62CCRG133kzr4uKoRGmtDXLDdnX1e",
  "key11": "3mvjwBqcnipPyaCvX9Q1tuydJ2DGAoPq2QjnRtu7XkVFvZXJv9gdnvsFx1tB6NtLqgnoYWqb9CB9JxBhS3amTvXP",
  "key12": "3A73oV86Q39jm23SxXxFSsnRopWXswgKigQu4H2vFYBYrcVT13r3SDBuJcjHbuDJtKMjmiFU2a7jGsMX7QTejhfm",
  "key13": "4waP1aiyvAo1HPVgY2WJ75CPcezwo8aQW59FJd2r4poQ8mykjKW2qmh5rfLhnXA2oPMUM2smSt8peB1oN7NdF3Vr",
  "key14": "5p5QjvvcQpxYWaVWaCTGTx9T5hFCAoiTokzMoiHx8FJVMySCaJJvmohu8wUSzfWp72bvfnNXfgGWGG8FswVTm2yN",
  "key15": "5BtD1yiTPjRcD4RJKcwxcAxYUC2pxnNvPJHzjmsGtnoqJd2Y8uaqwsgZbY2U9vaaYap5v8Bubm9HZjarVLqLwQvg",
  "key16": "q5374sCukDAaDr9fTKAdoPNoArb8JzwBC2GfVvRYrPhyPHuS6oUmt8Xe9AhZsJ4YeWfjejGxjiCP5ZLUAG6zVzf",
  "key17": "3S1jTHmYVxFUTgZE2Byxa6UnMVrS5tVzLxqhGJocWJntuyF1ypBUKF1aikbaBcSg4VrXKR3kAYVoTuxWMLrbxBpf",
  "key18": "2WZU5hYW5MrcS5K5z9XW4WznLnySKTDDjdpgq3UirMkCQQzGBHkotFHqp4KWD2PzAeWwSNkMXWfguJyfooGaDx7C",
  "key19": "4pTNesjaF8v7gcjpZj1eULYzdzZFgkmsBzbJ2ZxGkqkv6SBEGLfmN6CAbV2umEq91v2xP3ochuYRnTj8pJNNHUYW",
  "key20": "NwVTTUVM42H8jpeVpvfeVD4y3zj3ngqemWGHb1z9NZ7ZbcGD4xwGcC24ArKP9t9jibYfeox4L6fm9PxB43g4fBF",
  "key21": "4YbgMKP9wsYh2j2CLAjixa1kgroJ3dGZLsWi3dCU71oPatmkMiPCJHVSc9vCwiYdUq7tzkAdC5m5xy1VTA2zvHFN",
  "key22": "5ifurTYkAHUm1K1wUuiGuKPEb71zrvR4bVm5BkH27WpzQmbn2XGc18vfYp4boxatg9vhgKwLESjHrTfNiQBsyT39",
  "key23": "BZZFFS9JVZ1JwFoxThCu1V1BByFiHSHSqJ3MjVAQ8SMJs24QS7PeC2Uzqu5uFgLyg6bBbN2PSnfA7ULAd8et6DZ",
  "key24": "YhVaiAikivpgouYjEe68nPyk6xWd6FuMkFqtvP3j7SVgmhvZj6d3oDmyPg187zbV6eT2fWkud7mshivivhffpWj",
  "key25": "5unniiqsnKaPzzkMMyLDrVzkvgux2bVvrSfbAivLQUntv7isKTrpUtVx1cB5Y9SSCjaPGuTxQ2YgWCvXVoLBVJFZ",
  "key26": "3hMWTtUnzXB9FqZVJnMcTiVvDW41LCAfDj8tr6pytzryoKqykk2KPC1xei1QktLzKqUU2ZsCZkfVxYSSD3U6ewHp",
  "key27": "5ErzTZGx9WKYrH9vFDWwRuu337GgBq6nQwmCEUKbvZB1qtdwFSAj52GVhLnBDV6rHWrJA8wk8w35CnGKGmWJQd9i",
  "key28": "4EZ7Cq3M9vT1fJyMPpxLdJ8JtJHKtBmtMeA2U3GsvnGrgCRUSzwx4VN5Q7e7vGXFvg3Sc2fmPX5uq2RRraDpPex",
  "key29": "29JxAK7RpvsER4Kn8HkBmyjU9GQmqEdXvA9kvwM2qagPCRxP6d7Wz7SwNiCdRZERP9kqT4ogKRv4TWnwrn5PrbAG",
  "key30": "wxsiopabjmpo2yYcJmzxbZzsZp6wTAmpSyQWuMmnZBy8XSzXSupZGgJvYcRid4sM3ZEQAjxnf5au88cWd7ZELDH"
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
