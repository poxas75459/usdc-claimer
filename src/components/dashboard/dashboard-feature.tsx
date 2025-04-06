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
    "Ax5eDN5AdcDBLJ9FqeX25QL39L1Pi3CGTfQ5cYcLpSVPAxa4nJH35Am8F1Zb1MQcgPnbW8hpHrnbbZiHyYYu55z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s5HXQngTrZyBC8q4qE6c6gCn6SGYRZWfCnkH1HBtKRbpkbWNQxRF7W2gyuRCqLJmo2qkTw8DJ1VnPzuxGGe7ncn",
  "key1": "4sfDBbVDFSJwnuvUmEA7XX5TjUMggZRkpHL9WXo5fXMohuXQ9RQVfYwbMz5T77uUznSh7aStKnVoB54nLTD8zL9W",
  "key2": "4tPp3yMiTptnfd2h8QVhRY8S8CKuxTfSArpc9Jnu55UYrotNnsi9Qt1br9vuHLT2Pg6bpSLwZX36WuNxcAKc928U",
  "key3": "4WUVituvANfRcwNPxEx91ScM8i5cVAjp8xi1CouR6pXQfUSNoj2TCfCoX9zPsDg8rjPdBA4rEmsbXg4g8giGcPL6",
  "key4": "5wEZdjiCGVo1zbirchv9EQG3bKxLJVXX48ksBta9p1fAuKbh1ut7nAzWNsa64mU5k3v7393ged7AmYSeqFsfq6Sz",
  "key5": "5aGDgSbCPFMCkmNGn9SQAjWZJ87rfEuonUDbmZBdXNUvKUQt8JRmaC4SZ9E9GnRSrbTVwVQAKBHyFrF8nLaDGFNY",
  "key6": "uUEX8NgRmfVZ5NF7dE5qczLjETbRSeADbpd4zHXc35Ed9PvQjiemgRPt4LUsdsQa5y1QeYQSpNd9jr6Frr6fBhC",
  "key7": "GDmUtf967BoAa5GapvtvPWU31PCyczMX7n6BWHF5hGU5ap3cwGrrzgCTGdvzK69Aw888tqHGwKSyEcbGaZQE8ye",
  "key8": "3mCaUDCFz93GBmmX48CRofnzWfYXmm26yVvEQSBKg71Q2xtBL1pyDfemycf2kR4JEMQRaJjgAsGmjX9nhvwdqEjo",
  "key9": "4VXiozkFuescPDAEGKx1gxPkroEkYzEZMFBN87Hd4cwd4c4pZLfB1X8K5SvvaRgwNB52uS1yKCjxsCGTHJrkdoCj",
  "key10": "3iyMMSaXByx3JjNzUiD1cLS6ndemCofakLySMXAt6MkV36nSWEcnn4Em46M6qe13Xjy83oKybyyNnYXwrERePi8D",
  "key11": "22xPLHnyJNkkmWxxngUSyBC2SVgxG93r8freCBVH5mX76qanStvQpN33kQ5R3Z1z3zfHwYPwsiybBiDLwzXwXNT5",
  "key12": "4R259bnzv2F3NTaoT2LfgBxRFzYxx7BcF1sxjmDmYx5BrRQyGC2KsWbgqY2wRJFBEyZWnn9LQzuUaRktJ29uG2c7",
  "key13": "5xq1z6PzyYpfqvNGJR1uutAPVzXbbrve4Wp95r1CbZtEfzC2UY1xnWeKfYyh62dNxrfq73EQLwEPzjmpYF6ag1tg",
  "key14": "3f9x7tTgKvzGBfoDMzgsdbPCRv39aqKfLCnc1aLNQ7pLGUiydWQTkkbUwu18kB2bgHwRwEvbS4GfBgdJgws3TaRM",
  "key15": "5dHeWtAVj4FHTH96VtgpfkHyrULGNSs1Cw5rU1M7YwPRXR5xrt3M76uzFvR1xH4G5bd5jE1DL7XvPH4cgZaDeB1j",
  "key16": "3SDM3TZ4cB97Gct24ahu3oymgbLTVUDXX7wjzimJ58axL8NgvZch9vCxqC4JzuiZms6Gju1QC2KTwecmCDs4CiHx",
  "key17": "5oVBhR4AkXxo6gfWJNwEboS8j4HQimMa2vrsQHfMpyx6MR3KSoDc48CwqSe7RYujeTEQDaYziBzB3KcZpcyuL8yy",
  "key18": "26iWzLy6k8ffz9f8q8tnnznMBjQnVt7VECbMArEhS22jpV4GypWjmUbTg3hVJLWAvPwQmHcVVqxhZbeRNnTxkGCc",
  "key19": "56VGzmoMn5ZzyKWPjpu58iCuk42qfgr8iMyoKGi524ue9e1wCUD75tZ8iJ6fk49NETNDL2aBp7vnG4Cc1uJ2ENG9",
  "key20": "3Kb3b3nAV9ZuFWpTtgCXq1QN3aYkKDmLvAUtQgWApDaEZ52kN4jR6fCKdgw7diGPrzRHN7kWpnReFoWZPTRXx9Gt",
  "key21": "MgJ1sEgnwGivpWhyWR3cFqsxwCB38AGuy9mTDdoX5jgDxti6TCZGbGfTRydLk2dHahsSjT2hrmn5pASJyDXB5Ed",
  "key22": "5DyV8sbJxaumwDiRmb8Qfopa8J7MMPyw3sfU9tFKSNnTanEVF4hvQtBYjoEmuGJvnB7UPFwMCSfxz83VZsL9B6iS",
  "key23": "2dNXoMPGBaQfhb3jFyESssVLxvm4p17D9yopReLeVXhD7M3cPfX9HhWnpdLnUMUvnX6MYDpj6HXTF9uzoXe7XW5H",
  "key24": "Ci7sCnh7uTeYk18ayA24BihhyycTY8EACSjNdWvaD1TX3792VCgbUy3W2jFCn6SQM7aJXu9fGmzFxyMMnWWpUVZ",
  "key25": "22M3VJNKvhUWddLrBxM7FAB7XB4EArCF5XTTAk7CvSKRbkVCBrsHf143v3Ws5PS9ntwP3uFTPbLJmBWGLL5kCYK3",
  "key26": "fN2SMATbsR9GyLaURD1ec17Se5jpL2rYMWurYMW5Z8YKzWwu1f1BeUcv8Nqxz1oEzMQG5XfhsuWch2vYaubQ8w1",
  "key27": "5eLzzQFggKZ6XqhnvaeV9Cnx6Sj2rXqFJoBajhNP2KnVLiccaycfd4K2h62YfieDTU2BTEBk15KQwzJhmhooYzBG",
  "key28": "3nmpfhHBfT6pkwm2UPDcYuzKW2HvQaGgFQ5m6dVu8GnAhwe96HL6gj6AF5kgG3DD8xQUA4JL4kNGuymU9YKFEuQb",
  "key29": "59xvpgAAv7TkgwacrNVZe8oxxGyYB3NU1Mw44HbGqekZVEgVPo5pDdtvxaQXaQv8D8xY27VyhjYTygGJUwzRzb9N",
  "key30": "4f4c5UWFLaGAYYBFgfvu8cnDxfVY21sq7qDjMxTJYZdZKvxUfkGqBZnPsrErTpThgCiQYqRBtSfTLVQLiRhZnJtf",
  "key31": "3N2bTmBPj2KNtQ6ahLRzMc9GF36HruPJcxxYHJHwio9K1iGfhtZkKiLxbR62Y7E71RQ5qE62BMG9nFQJacjK4pzA",
  "key32": "3yYK27jqUnpssNBAwXrHfgkLwCuc6SpTL3K2ETRRbiBMaH59QiKKYUVJtF7uBpmyhc54sULTLJyxPCiLaa3Ko182",
  "key33": "43tPe4QfABMMSwLX3Zwok434Ve1qx1hym5E6zi2FscgxibKFRpgKjqRDL6KbwCbEyq3tbPbRWheJUeZvzY7HMtdZ",
  "key34": "4UFVcsyaURpfAfaiueFxqpbysA3ghPku6TwN6ZEabNonoiUsiHnZd2P8XF4JSgkbb8Kssma7sRBRvJEbV3VR5JTz",
  "key35": "wqNG3GnTTaQ91iqsf54XiYqi8cD2s2ExEdRCpngmzPAFEs8dYYrVCkjpqZo3xiKLvWm912UkZ6VcyY5LznDLDdi",
  "key36": "3NWJDuP5ozWs9uArNyDfbFqtUj1YPaC3dRFfeDixoGrCANgAVcTBHrNerL3RDWJZfUDWGCEk1txXtDYPg7FRgpay",
  "key37": "5sLytvgQ19gshQA553ohRh33U1f82MYYQPVYrqtJgstJDFQ7mNSKqRYcrVARCuoKnF8a7oKCDpiN76AjZUkuEfYC"
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
