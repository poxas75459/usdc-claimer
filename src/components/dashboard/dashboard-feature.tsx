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
    "4fUdLqTnjm9SQMcBp2kZRskjzoYW56thckotFz9zNXJf4X25UwDBT75G3g5svGrSwg4RVZLEBVb85S6vzR4czpt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wsDYdiTgQSQJT8a51wfABzksw2qTEzfx7Jirj3uNT1T6sohg448dCM5Rb4dhXnwW2aownMhKjNJ8cTxpX3CPjVG",
  "key1": "1fbkzj3jKJd2K6SZG3r4NKFKQC7qMtuNczDjmmR93AMDzQprfAk3TtkRuFLdG38bi2BGyuBPaD9AcaSzMNxUpTP",
  "key2": "4P2JSwGW63beU8hpcNWpsoGrW8hJoRRHvsd6gsE6rnCm5napkdekfFqRFWugiwxnZpi7L4beao8KuYtJo3MaPK87",
  "key3": "4b4ebugZqPFFH2goRc4ygcSdBSc1awcAM8Bw9q2r89LrRFvamRDJNjZQmQczT9hB1KC3SCGww3nDdLwNscsMu9XU",
  "key4": "KwwPjB3Uys2MxE176YZG75jHgYFFzicpWaFzZj3oDj6RNYuUuAaqbAofRMowabrvjzWAjfyVpzv4cWChKMUSTZa",
  "key5": "5UAVtwHMfa6MtLYDLY6rezWb6UYNSZ8m4gYwa8rd7VTkrxdFzqcaWKbXM34sxpkojuWGfySE2uQp6TePJQ6A5PHf",
  "key6": "LSdPDwdPSy8q1x1dV5pJAacrQ2Zxn1dJBw3vE9tXmwdixnK52UCCx9GegooqnQtuSgNvmMnih91Karfm4xEKyjL",
  "key7": "3QkeJut9JueWdPiNXh3wKEDHEPdxv4Ep8Z9QcwEWirNEVaYk4Ywri21WkN1pCLUtTnbAMf39pLiyQr2bHduszpxd",
  "key8": "ie98izaRV1P78fuyYDSaqir8gRF9AfxWkEZkoERGRDySsgEw3NgErQfqTbpt8kPoRxgL6kw2FHxTAAYkkQeNd3M",
  "key9": "3gooohZA8vnHWKWxzhLzpNeqq7B6sEiqGiGTdojeFtAQsS2eqfifsDwaEaegjKwPkKWW7FwoGSABqsJMHrFTrmn3",
  "key10": "46oqv4Mso2UFh8zSkjykLstZgguLFEDLnYSGpDQFEBFBmUyuQSo98C3yyiUSkcPCqRmR1DtrcZ8RJ6SLSJucJcP3",
  "key11": "5YRqsPMFEM557UscA4MC3Q91SCTEEVBSrggJZe957eCktZGGUZQq5JgR9Upwteqt7dSV4WEqsbykpz1wenxUsBSa",
  "key12": "5Ldqk4nkS4nCNg5TerBvZEtkbgFPJYoAo74jcku5XtZ1zJUFnS5LojvqpFsidK64AbPV6fbc9wkz71GrQsHQE7B1",
  "key13": "65eRrrTTZanCzn82TVS9wB1sS4zHkEbLpHmtFjEJkGE8zj17qPiVoQmxt2DdM433W5Px1Ny45yfxvFMQBpJK2CUH",
  "key14": "41eJ1JvXE2tEWSRm8KfZ8WpDRC5cSNavKGBurVRBsuNtWkWrXDs3ir3Je8amNDR1jG8dW4MH571YczotUcuHtoJe",
  "key15": "EoDQXAFrMB3LaUERKtvg3cN9mpRCqUqSH3V5xQ2qZy4ciB2si1ZjPfEkB8L4ftWXY5ag7cKy4mUB6vMschbVvaJ",
  "key16": "4rk6BprTuTWUWfqYTdoRfSVyN9PbVYCMfmfR2t7VyW619AcCYevqnudL3uHd7qaUwRTmmRMmorLo7KX9wXyzp56D",
  "key17": "4mctxevSMVvLhmPvin9swDCxAo5ApT4sr81PHvPqMARgibg5G8DDuW1BBzEYURk6HGNBqNcbpXRfvbRCxsqBVHKP",
  "key18": "2wMkkdW89euajR5vGCAkKBHiG9MP7onEJLJvds11jGZejdgCFynvoWocdjMMWSzrGnLnGWELYXtsAvZS6NCdVg8c",
  "key19": "3vyyhmpFt2aZiLacf9czRz4ikTRERiniRDKJWESdutkqnuE3AWixmLXGMEo7zjs7MfaZD9Zq9YCzDHsas1iQBV1C",
  "key20": "3L1XKJmqAEPrhmgDWfogk6vpwF3X1fhBk8dxeNqCidjrEc5VkZmfrsjEXC7MwQkJ8u73xkKzCxMRLQyq1uLgwfRt",
  "key21": "ra3C8RphJgF7AvkceCP2FK78hkQLdc8aJHBYihKQowQc2cRGvRZJCYH5SjuU7htAstyEQbPok8fee7T3YKTRogg",
  "key22": "2zaThB7yfB51MyXYuz5e2NbZqFyQfkBLJ5ZSt6gMMvWJyv6UZoYbeHW3KqzAhoUTPQTSD1PGfXVLtLBPuiVZaUsE",
  "key23": "4fDT2mrJvemaXC6Npgw2ZArHC51ky1LEK7sPzR8GbAk9Ynrzwcs9b1E1dmQnLanqVx3eHTUm19g4W5pZJrVstQmp",
  "key24": "4JHwjSjQQVebdKzUcjfHTPgeMJoaEGAkWjAKrUSavXudh2e2xBK7owJEdhvZFuZG2Vt3MPpxNC4D5rVyRBtsrP7",
  "key25": "5sDFM3j1971PCPuZFzGcqpZt3yR8X8DiePY1xgT1eexxczRs8iG7BFnoZT4gN35p6cyG2AHDB2aNqvUUGBXmM9Vt",
  "key26": "2JAH6pwEFLekHa7ibykLwpe8LwU2YYTsqLYkZvXk9pVikDKoU79Es4qPcTbVaageDEAixFFsfvZsWXsTcSvn14gD",
  "key27": "36GvGaFDsqjo7MEjwhLnNPk5PPRi9L6qc9ERbguEmSqxbFLWa6ZzzeJMKYbEh4SnCUPKq4dxT84gviNK2q6M4Qht",
  "key28": "2nJmrQ8nfQVpXwbrWvtJi1WxeypQZ9pXoaCLfYgudVQZYS7JXi7yvk4nTWratN1RVa8StYU8JB2CmmkrLEojZmZJ",
  "key29": "5cqvUPyAN1JUZzvWv77bgBe9B6JfHeubFLzQozqGxBcYo1rA1zb7tz2hNTrVL7gheGZWbnVb4nPhxr1suVJrkQtZ",
  "key30": "3uvNtTVUXbJqRDe5PNCspmLAw7MpA7ccAZEkTyFL1ySdkhmfRsJoDQWZjr4M1UhMjaoHMtD3nhHDNnsaNgPgR1UD",
  "key31": "3qQVBP3DMJnejshgLtPcUgoDAzK5Y56xUWsWTMfmBWCXyPUcnqYszZTpLUSoGM4vUuxr2RDtaUQppJoyRAtc52i2",
  "key32": "2cE7feCKjM1nshdkLHoMkQptW96TrUJ3eLZ9Ue19bViyJofyUyAJYnS7yqsWfmppAUa5c1c6kdfJ9PynuRQszhLx",
  "key33": "4bvX6fXgbHcesUZs2kxnz3KPBxsMvdsheyPT9z4d5Tykh4PyWb1SvhoqXUPoiW59V1nZsdzbk7PYGz1YY5vHbNBW",
  "key34": "iBBakAtZdmZbwpEyG3LZThkzwNTST57MW4KpoTaqQ7krSXagnVWyXoKAFu6KHxytrszkBP5TUCPoNAPuudQpjVt",
  "key35": "5Ufvzw4pGaDu5M7Lz4qDbZdw971mxMAH3W2mmDJaRKMGcBNtgSRcEdEWcP7wmxVzAhNzyUK27WHxGeGTyw1KAVft",
  "key36": "4b7f7MrGcqSLowr27fLEA44aWa7VnyHwHEneKiZ3sBopwR6rraaYy7vKU1Tfwd2d23N6nuGxmdAhMrYmN91BZqr2",
  "key37": "2FntzA95XBh1mzQ5HMRA6oeBK71f6xiypoDXQHEfyXkw5Z9gSqQGjZGMFsBzvywCabdnFpZeGesBmve48H5YzcfU",
  "key38": "5j1FDBR5hrd3fWtrqdzzhfT21dvSPABWCDRGJGmvwH6c1ef8rXeuoMmBvgPdAcRywYJaU2KnSFfvwoiHX6sgQ711",
  "key39": "216f6ec2diTMkKyPfEF4nc9TfZVaerykbitJuod2LAFrx4ofLBm1GAANQML67WBrzUo6pGXXwE3wbkKHALECTcLK",
  "key40": "4gH8CP6zAJQqwP4t6dXXv5HePLwhErrYq4u5QkomvT4u1MXE7sdkwRUU6HNupmf3oXC47VwbL39iNRTZX9UJdo97",
  "key41": "3oEsnATdftta4drDCh5TVsA3VhN4CV9PvmyfBW79htzi3wyiamQ5ksTfso4rWBAcBDZPPh3LgJXGvrs5RzGWuu9z",
  "key42": "5v5dKPe9mrYBeyaH1hhw3K7gihBn9zFarUqs6Sc7w44Fc5FTXBTXioU21JXzceiseDak8tNS9cGJeKeYSgKtQ9eL",
  "key43": "58sjyhdrdBhb3YeN28jUBSbiznRpVBJFJY967Y2KkFwMahVbh5kKbG9u2Bwv1hs3izBmXnopyZpWKYSm7SCGzaYs",
  "key44": "gsqSz5u2EudCLA8n7Q7z6Tgh8uM2awgAzGRdDBA17XkwxeoiGNHvwnXeWEXr6xegNiQYNW8Qg1HzmwSsM8XvoaX",
  "key45": "NqRN8q9wvjA2KFKnqt53FtoqJr8W1gR18r2TKu2rzerBEpjYA2hvQHhLVE4Z1rEMNdt3rP9WtSG24eLPfFgx3KU",
  "key46": "35aHPZscu26AQxQcbAUSVAJeTLKhySLzqzZ3SkHVy2Xgxd75mpwUG6Zu9cykbXCjjQW3KeBsv17WkRTz5BpNHksR",
  "key47": "5jebJuHLqypALEoDVuFz8rKHSq3pzPDYc9uECy48hzneMxmAk2Ms2GA6SZf847UDAD4iuAeWP1HeBZNq4Nzgk5GR"
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
