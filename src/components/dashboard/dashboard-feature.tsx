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
    "67NyJidbecAKDnwBbFtwsM8HrsQbCotJpCARBpPb4dt7mW4X5WnQ2sJ2L2exqJPo31u9w2W5yyDoTZZmCdNLizVE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UG2Nkb2rL8XxGHe94R3L5GwgeT5jqXrq3r8ZoCKzkUb3r5K8GFWuXJJRuZSf3q69pWrZRoHtqctzEpDP3XdcBKo",
  "key1": "xhJTLw5YCvbdaXWABcccqSJoyg5CADfHNc6L475HTEnafF6Yh7k6NyPqoJZ969wpi2ic4rY1y2E76BmaP9LHMtB",
  "key2": "3e6F5V9AfdC4N16CBRS1LwaxJMovoDJ4aBrmWrrj4tTVTPVR83ppYjYuySAGZcAS7yDgvhMFTtsFmZQYGhxEJkFp",
  "key3": "64fA4sjaMndaHqwRDK1GwesdEbu5z4L9t2KM1bYVZjXh2ypHw1VVW2rX4Viyf7QeYPNPuB3jVXErts5w3pR9cFBq",
  "key4": "5gtTmNzAUtFhjrZEfX8j5GZ1SEkBAhT6YKpG6jSFRtDoVrsrn7jMgyJR7to9pGrY91mbJSPvZ9cEknMQnKfHeKzo",
  "key5": "5TYf8YxBZWBq8tJemGmFMuYcinnNNpM3s36LcBQg7oJczXCXr8vKCMwDexBErpoE85gSMJ6CZZz6ahHW81rzhNSJ",
  "key6": "36wQ5JpEA9yatGdnoTthKZiaRaYsGafuKPq1frG9KGaKVe89HswiRADSqJvqhqJsKL14iATxfk5Mt9bD53ZqAHQm",
  "key7": "3Km7vwqjML7ybeojfvTnuxiadBGSHD7Z44HVDBy6Sxv5xjVko9KsSYuvpuvCvWTUc92v5JMy8C9vLZFbMSFVz89P",
  "key8": "3dbo6NnCvzMggak36cEcRqLSyQzqNPWeV4Pofxc11gQGiqKbJV2nXHyNhYy4FtsqD9rxrBxAEzP6y7bDzFouhiZh",
  "key9": "5YmCV5ZCMKag2GzVVaEbazKjv1ErBvxcR8aGokHt39zn7rt6QF1QHnj8f24CLTL555kFDqb8oaP84mweGTQ4kE4X",
  "key10": "5MYyKB3wcnmH2nCMWU1k3e2TnyuiSjAuYzFPuADJRFF8Go91Np7UN4pw58e8xK5vraCK4c28BDLgALofwMDTRT73",
  "key11": "5pZ3wHDTjD8vaLZWY1ZmFfkvKBAzphzoFHeyEdZgtUCNHr2g4qVpKkptXd2YJE8jn5qhYr2WCrYVyXGAjSVDVJ9d",
  "key12": "2QH7Xp4An1iS2RhKpypBdnuXEw9vd2VpUeAUPoFJFnd3B8s9up9wemputgeubDDhtJkKRE1jV7XE65bYei74NSbr",
  "key13": "2XdumGJyUZMweQ6Q5eygSjXpijuRjfoPSXVasXZdd3q5oErAd99EVpdbAzJd1fz6TuGkvNwBABLxRJvNRX94d4im",
  "key14": "idrbouqkwvKQyzYgrUciP24hojgGUT6uUejUDUe5qyaWF38d8xmEGMFCSoptWyqNqLzRCifeo6SUFLcKgz7KiZz",
  "key15": "SidLArLd42VbBEnsE2TkbrduxXqiwiW3ii2bSGS6JwjWXRHZ4zRn7R5VZD8ri1ypn11A78iXseZoMd9p2N5kPJr",
  "key16": "2wo3S2nxFtK9HTR8ogXjFskFEH1LSpTHD4qkv3Kpu49omrahkP7ZYQNB1S48MobrQLpYNCBT9yVYtd16UdD1DRD",
  "key17": "3f6spkiE7UnySprrab1CzRkSU4Vhqwvatq5RkgJX1ZtLHTLS4rPLpmte9eSDtq85ch26sACB4qCuLSRbPtBBYWYj",
  "key18": "Wf8vg9H612Cx6iUV4M4Jv9EiKQ472XWusknNSUwmYAky3HC8jhXyfKEwD8DDXw5vqdcZR5ycC8nYq9Hap77gEj1",
  "key19": "4Wk3fNq8wS7nALTmm9QEEMb7NABD6HA6qeqSU72QdDHjW7DZQ9GTCdnW1X3NrHSXbLX2VvuqDudKU4gPr5mP9M67",
  "key20": "638xrug5EwULQqcamEWUpaC2Wz4cEnHddKxiQZtszntf2DZhPzvggUL4jQpPrBWDuV9P5ayTwah2Xw6AFcq5XpGV",
  "key21": "3cWrE5eV1NKGD3jDmGKdR1kWSFRRDJNiDLhm61n3JBByUEzyKUjM2npAW3zf2aadU6boo8dPFBFRyp5b2BzNT7NQ",
  "key22": "3S6FLudXrjumVALVJyz1Pe6oxNqejPM87SeUx9Zg4rpW8qj7U7qy5fdpj6LEffAMr7DpPppGj9uPSRMPR3ttdpu5",
  "key23": "3xFDm3PBSXMGoCxD3o3PUX41MfKZSFQ4ncbQ7f34ns19ZE7xT8mtFjv8p5g1qVoMPm2sLqppCcjVusXa3ua3A4VD",
  "key24": "2SRUt9nSr4axNAzK98RNrHLW39yFNBe3E5Ugtn545BKZEPuuLW3B8QbCUPLxs24F1nbHkxxnTpsJwf6WVRzCyvEm",
  "key25": "pLXw1QzFpa786Go2C3L2BCypXrWqM9vptxWY1jG4uwpFTFgNxh8ayRdkQ2U4mgbb1QTEZJqz7DvfFdgcr11FhS7",
  "key26": "5Xb4c5K1X6hdRha8446VHLEp6za1f8bdZKWeFTYCMEbUYmtDgRkKw1wAnAbznXCHNibwdgdoXU46eS6p2rPyPaXF",
  "key27": "64p3C4io2ixk6VbmXsEAnKg86GxvPAkyz6zeZHB1Mjw1Hr4obphtivpGFR2CxbZ1odiuwx3XXRWyaSh857Fprh6M",
  "key28": "3R2QHCqtoVv36rEHQDMiT5A3pL41q3NG77WBbXpujunxbUqw5y8wz5SKHiYy7R2QfvgVb9BG1A7BGRDbiNJUywHu",
  "key29": "5qgRuPTfuch8NogDrvtYgB9UVTugqQkCYbR5ePHyAXAAe7GttZtLgt1o1ZpNi5BikYZUsXgT83tMs2fqkYm7UDkp",
  "key30": "4gYFVRjirhp2fb9Ebx19ZWmd9usjXaPzpdNwuc1XTY8bNt6GXyfKDbQCoJcaNzAnMSi9ere433Swy5hXQ45Rg9Fw",
  "key31": "3nHQwjYwULXDXxx5Vph76U1tyHvZCDyxEyqPL6khdZzaTkcKmvMVGDa2sjdQAb77zqxCEGKudGuXL8UnXyGAvcSY",
  "key32": "2qY9MUgaCmwKUZ4YwCjwKkG6wFmRXAFHzZEhQ4iEUHzZSvFSvAbRUsS5rvJ8DU23CG9SskZytawKNfW3tBrW7rH8",
  "key33": "329w5F1upxfwcPzSGDZ9XJt93yN4WyASgazjLnLtERX3KEY1oL1r3Uv98KnPa3wuLMJti6y8ekNih9EEPFBx6vqP",
  "key34": "2oMwkzGuDeKhLuAqequxbGYUfdjGjoi6bRMa9UknBudryzsb9fQmJ4sLm1AqEy3S86vMBkeUtjDcaJrPFN2LikQo",
  "key35": "5LRp7e8cr1YA6AG6jGQMgn1YYVA61eKmZh3B77yCQS729Gd7nvmzSWYZx2pG5taUre8Dyr2GSiSA6DuFs6CMWQ4Z",
  "key36": "5qAs1LqsKg3xT4fiHur8eGmLbeNGT84Z2qPwdskoutBECaUiU3ThnmEP7u2T1YXuu9N7o2PjBc6E8HHXpJXYSmNk",
  "key37": "E3m8fxYZ5MXkG2EcmDw7wD7BTb91cJxeKsvmtKi3GHGdkP4xbU9X7veYHgrsqumZHoWR36CMp2evu8h53cUWcQa"
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
