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
    "4EdudPe8V7KLjFHSKCp6qRChVEZw3hpkK6iuK1gNMsyQbiCuwUf5ZR1DvMTPTCb3w4DgXPfw1QBRQtV5hLTuqDhS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wj6RBT6RhpSvymvL2m7zrDMKRUSFkkQ5A4vxoMBXUxiT4iYLK4zTHJTqFXgwcP3sPuFnFV62Fofrot2VX8x7L9K",
  "key1": "4JEdaH5p9BWVrC1VS64oo1LjCcqbe9VEjV2abSbcmrRLGUhhcm1YhDjxH9diYANizL477sFB9Fd3XRSJbZow6oWB",
  "key2": "4hmbPxBd293FRy3KySmby1nypPwUeGY2qwMiwjrmkojoc5ZY4uYTGePLgQkpmdJ559bkSAJEcpGV3Z9FTcHsjzsC",
  "key3": "4ohC8hnAKR1ax6veu7bms54dVomLRjbozGXuwHc8fTDrc8V9NV48EigdCxHLnM2KkdakemQUcVwjGEq1W5y4c1Tf",
  "key4": "2hPHHa8rUWBemhZsWmUbvy5uMomMLwEBaMFpEQZBeHMXV9t4bj2REkhJ2qfZuzMkgFQiiFgXTcfFrWpPvqME64MW",
  "key5": "24hYdMm9fn621GG7ScKuxVDt9PHuo59fDk5CZ4CkyuZKZeCDgv5c6ZxetuBgLQ2WL8TWPcb1ZvWodgm6dNTAGhDs",
  "key6": "Wnd643PV92Z1Db72EAmnZb85kQaSp3WpURFPznF6VyfsLAPvshA39oDf5zCvmpRpMBAMqC7BTCnq5jHts34dB3S",
  "key7": "5doP2AXiS5PW7Yjjb2dUrtq7nCU5osdY4qsr4WwpsqqMwsAozQTQ42ChdhV2xSjmKM2s89GRdBuYpBA9oo8MtDmM",
  "key8": "2WvLx5pdtiZCNS8FGUFewRn8AT7mfuuo8mtT4aRhdx7CemnHx98zRpFMWSg8RbD48CcrB77GFt9SFB1CYqL2m8Mz",
  "key9": "5muyPqyYMjr6s1rCNH9TSVHE7KFYZpxZbDArkUywk5fCs56Gd6xW28YmYRdJZH1NaA96aFWypim5To3fKaVdqd5J",
  "key10": "rfoBqQRv1GdcMgH3Wbkk5HutUBfAKgSzMfHA53Hu2WPTTb5jujj8Kvhb4uQrtBsVMEKCNHovaE1d9XgFE39qEFy",
  "key11": "4iWbrogeSnX6sA3QGggMrb9hvcdjgA2i9Y1aGFPJvHH7cVMa43t8ehsoUvypwzqx6mXGqYsDciVB2zzXvypiurid",
  "key12": "22cG6oL4RTNFu5gPAEKMYzR7LD1kLdNpCiWMPckpxEm9e8gnH2PhJZQFhdKUnY2QrjoCoDVJdcRJFAUZowDzVd5k",
  "key13": "4q9YXz6gWcrZaQw68KPRsWqQefPbcapeu7fpWGxNKnwUN3DotRCNxSGZ397YpW5Sw7NEDuVK6edr4KmoxSprdbtL",
  "key14": "TNViBbSccjgoEyBHDiPTCWRSWeV7a1NqQwF3nvuf6yzNnkwezWPCxHABrXeBUuLhLp8bGGZKHNj72siHqMHVHpg",
  "key15": "5aTRtenK4YaRBNgoY7AfhwYmQSbZRdrGGTdgqF52qay1Vz9aqKFw1becQ3hqoF97HNnqvGzAmqC9ZCVeNEB5ABD",
  "key16": "35oBVfuDvPfohuaMnxcXcxxhMeuHznhP1FqdLStPEGGJHCknAyM8xWrR78LMq63C5Pgu9UxpUYL2p7u7cqqoDJ52",
  "key17": "4vWQbU6Xme2X7yyffYBVncTevjcic5WEofTM68B2dTGRcmJxTL4H51yY6p4BrdpkXD5T9wtXtxh1Cqcayk57c6FD",
  "key18": "62EqGT97YX8cEv86Rv5UTkDMvSndxmo3XnC5zEkwS6Pj3L45MoAG9MKSLQu6G2B9YdaV5qohyqrmi6tkNsEKLwEd",
  "key19": "5ZFq2v9o8whsCc2QXMtSB8BruGypqnQwb4YgsBHzXaE12qSJSNvzr2CTQJ1c6TdsoF8yPKtZNoES81Phw2fN8hWt",
  "key20": "2EWnDMEN4z4F5Z3gKrsEDzNLUN8DDo8qR9xNSg4yy4gr8jAHPgUbV3Nimftqe6w4rRZPLHXFegifW3WzfXEiHrLf",
  "key21": "4Kni6QYRmtuSVkPXALH2XCwHsHcUP4YVz6tC2BAQ5RPFrkNt27eRK3cw2wca74Qivm3yUF7YUDu7Z9fvnhq2eeSf",
  "key22": "WahgD4L5ASKyLtM8nABAFw23UazU8a4yuiq1GD4BG63BYYG2h19oGiFLzcqYyRvS2po726uxQiWFKu3sqmPhVgH",
  "key23": "5dKKcRZKK4oaxd5TFNMvjwb5dSBriM9J7sr4S5dJ5HxETJVEyGvC1v4v3jH8H2EjmjSexmSWN5aJEUnAkDEmVRhb",
  "key24": "2m7rQumwsoW9Ymqtni6vX24CtjbJxwnUmxZWS8sUQV4nk68moadbm77EuTq4EmWP9VBD4Coi15j9JaQi19VRJKqf",
  "key25": "C62gzMbz9rn1SURjsTwTfr2kcgB6RHZBGCsZGVK7iCW52RXLLopQegH3aptzc47yjpL15MfRZqjJi9R3S9a8x81",
  "key26": "3jVDSLCH3pcg25ZcwhkBMUGxZ2xvS1Zv7vhcU8JWXQDsFtPtKrUfTCfAw94RF9jvLjUyjxyi3AKDAfXk1aUzNSvp",
  "key27": "22jZ3XYY2Fztz7q5cDo5RjVD8GYe2HAjvCQ3v43ThyGcyQwug3Jr9epdUo8LQNj5a6o8cY1eDV5xTjh4hW7rXNQB",
  "key28": "4BBE1kSs6tEk1bahSc4ZWzSicJg2mXdPV28yFzA8UsgvsCkJx2vifrJCkL8Tf3guuwRxfqtu953vTTs6X5N1ZQL9"
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
