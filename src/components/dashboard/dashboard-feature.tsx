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
    "KRNZN5KYEkigq9i3uVAzdqr1bpoWpnCsedaEhDJ5gPXFW4beypuXz4xu4qsrdTMsDu7ytEz1JCEKyVCcY4BbKsS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T5oeYqhFc4piR5ESCVDEQ154HXU6pJPQnbqjWHdHZY3ibLB95HkckJ3znCH5d87Z6fQwB7VebZiVZ3Jnzqfbs8T",
  "key1": "5CET7DW4U3jDmshME8E7tKPAPqfF1c4ckiefXTHHzMobfJvMHuAxNEx3qAsDUAZ9d2Ceu3Jh5ATRjJnomzwh9J6Y",
  "key2": "oSmUwdhhdrCZQ1TdDjXYzw5PxznAan2CKyZnzufRQt9UzCj8Er56ZbNQ9n9M5cbtRCAo3rcry6TT8yFe4grZNAG",
  "key3": "2BL6jYYdhnGUjdv7VNMQsiruivpgMDVjAuqdBoGyTyJJeD89jagDpMi5S7heMFTv87ghRHbSipcooRzKEcxb2zmb",
  "key4": "4DqgxkjZTczpCScZGZcChGtToa5B7FFiDLbtPJ6dLgacQgR2QjjZJud5RqihpQCWfEFDLxPFX1GJTQjFKgjFgh46",
  "key5": "5ixX938aKmKbXf8wj5zmRJCsjrJXsv2XZJxi78Nvd5cgAmFUNq3mHsDzRUdqAUxzW8mUZAhr6AXF94iXYmc4M2Bm",
  "key6": "4eyCQwQWm5ZeGZUMjjTmG1imqRKDNvhGMoJVkJ4UgmHRM1K2Wk5As19PJiXR2d7mZ61NP6mZaAh5SJfnhgdofXo5",
  "key7": "5hpXwbKePz3f6qA6Ja4kjeTE9gWdMLwTEkGm3ybNufSJ2WvvSuKP6kZP9kSNhk1MyfqG9gC1KkSZSLenLbfDDjer",
  "key8": "3ZPpvk82LEbpnToJCJKnieGvb8AmLfaBcUdv2FtNCdBfBVnnGYuNvvbsEL177erS74YXb7ZPdSmpCSuVHdH86Q1G",
  "key9": "2fPue1tn77xioCVZ8SzGbMLbW8gBu4ycSTHtWbsfzP9nHjsSZS45vshvmuxvTfue4XifLaTgdqLRgwZdxWHJdrVQ",
  "key10": "5iQSaNmLek4wqZaK1XFLegEZdCth5F1h5sV6WqjuhjXuwroLTvwAH3axDwNYhWJANP2Z1Ds2u38tLsqKSFK8X41Y",
  "key11": "5qqdXMx3FxDzpmj4kuRix8g8TNqVsiUdzvy89NGDhQ2vXADvP3H4KmBPL3r7YNp41qYEoLnX1MdzRPMc2ruWmUb4",
  "key12": "652Xadm2qZyitAnEwCcHSE6FWEBNHeBAano87SsoCRrVBNKYSELgT9t8RpfQ97DEjRVo534UNMaWQC54sXky4NBv",
  "key13": "3TnhGmYzARvbsaPcW7fc5Wrxs2UAthSYKYDKidLY3bu3oRVmLZjBR5AGqM1B4mtP2LGZac2pt9DJMUy8jQ59xw9K",
  "key14": "2Lg4h64CRB5dP5sj71erdpfnoWMzw7LqrPR3UqhKMfzXEqwj3HpLckPdU3exguQMXny5xCiwYkFMCVfgVr5x3Rjj",
  "key15": "5ozxyCCgTsircBEGh14ywDkR6DMBQoNkF69o4ukiLTAPvYj5r6mywQ7C33T2amnnyRXa2nXa7hHWpb7TT8MaPUA",
  "key16": "5HGB3BMme21NkYQp4q2Q2FrX17NWc62uRuaxpfKy2nPn35oe2bXCx8jM9M9s5FBjmakhterzsEtuYKLnytqJx8vt",
  "key17": "5eCChAfXY49KPk9yAMve2JrCBh74gAALUhwFmxvveeM4vHm3FjU1kxAujs2TRLAAjTL1EtdupcmeL3ggojPEQLCe",
  "key18": "43hsFi7Sc9i2h1J4xFXJjPyM9mM3HgcsNpaAfR4L4YeXDGYhLw19asYhq1TLuHBDTFnrEDjTTEeRLAegMCby2HUM",
  "key19": "4YUr6vmMgivpMfGsgkc3426XK1QLaAmiLXr1hvJinMxuqxxPCzwxJkT16R6UhkPspTa2eTJhT6m1wKfQSAR6kqMQ",
  "key20": "5JNgKFDLKWRpsjWuVB6jyvoRB6xS5GEWj5wbujs6dt6CbMNvkvw3Vbf6jkKn24QeydtKBEkNpZF69oZ8dZaTzMMP",
  "key21": "4fvg5wSQD3uFAonmVRiGBmftuCoLtzXNV3GXPzsjJdNQFhjBLNLuYpPMupJj7di8NbDqc8gRxiMo5G3RaifLQecG",
  "key22": "2GYz96rTJfvEKYq9teY8f6BqygKVCJcfyVWSoRcamXBs5LFfm4sZCvDtjh55X5YAFUeHTeH8cfqrCcCwpRVybteN",
  "key23": "2bdt6oeoEF8gMey5V1TcVvdZEaYGFPjo3U6UF18xcfvPmSF4E5raC18brv4zGyYmvEzFcs6Zr7vLdxmkYW89STV",
  "key24": "4xZHaWUdRyVGLcZt3WaXReriqhENd2cZDUa4x7132LG1tKGaHUtGXHRtD28wbdUvFwcG5LcWDKwrn5pfsMwusGLJ"
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
