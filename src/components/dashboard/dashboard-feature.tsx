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
    "Y5piNswbnQTm6MKiVeRAnTUFuYhfDsnVU3QuLgsrpNSRTxh2UNXoLj7kVqiFC8bJn5prxJXzMoCYPrDcLcez3Fj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FrPZ9ftGRT1nLArZ9pLWsLGZvTwRXdwo6hcEtrzEXzCDf98uvFx9NtZ5wbpk6ySeS3ZZK6ADF7CNthibBwJaU7p",
  "key1": "31LnnAWH4cPEG8ZiYFRytQhPPCfVj5G6vYdDFhsFJ6Fy2R1AK3ChCCAFLUQBF43z2Hja8E4EtTdviNvqQMguc4LR",
  "key2": "3q3arsXMZa9wZpdm3DBBWtSfq94WjuzuXRP3KpKzKvnXKqYChwpYFAmjB9diNjF8uZki2e4DH2a43x8TpBwrhGkd",
  "key3": "2Mdnr9g2r4sNceZ5JtxN6uXGrpt5rtAo7YJoxy87grcg3itNWteuWaxKjCEA6AVa3CjFTQTwXpGgKFyUir5GXXdQ",
  "key4": "4pnUFMDtU2CH6UziejcfdeA4CXq7pgmNfzmcnrqJsAdB8gexbqyUbx5LkBdELchxi3jDmg7FSEMTwF2BqZWdrVex",
  "key5": "3w4DcYVovSTDmhKsFhWjbSvrW9bQkscn6mgpddchmozenRMoXmjXcFfqj29YP6nUZG2qgNyj932FpSCk5j8TNqbs",
  "key6": "4tbUJdftju9Ee4pW1FGPUSWVuLWfcpzjRm1BNyCckJUmngiVDL3iDQNwckztDCuV41ijDVhwW6LxGLP4KPMjm88K",
  "key7": "5pULagKprQx8MmQbnf6wsrzFWU7LsC58fXkeeoCGB1KUvhocdwhLHGVv6rdMdmNMaeqyFWaNXoEJsjeYs5JJNAiJ",
  "key8": "2y17mGMzdMK6qxMopvcYArxWCim8Wjqyk5ihUSwy3L6oKsBhUU1AZ3Uo76eGfNfXWRzjk8EtBCLFjxz4QKCqD3q2",
  "key9": "3cxF4ZU7nihFhheDtFrgSNSqddtR8daLvqCpUuFdmVTffcSfCZaPqNgwZcVSHLQR2t3PX883tNuBpxWt9FULtKXQ",
  "key10": "3bJwv5eKw23hLxkeTXhfBWbdvKNAY296rUKW6oE1djiHDa5EnkrgJ2GiMGK1ZysHQ6WGV9DyKyZKqJoYgpw1NuiH",
  "key11": "45J8hXaeLkwMxzPK5XwpFq5EF4nRJuMw86mcm81cyyMEsvXKRk9YNrFLni7rbCQeWefzrkd4rEjffs1QaxqFo8bf",
  "key12": "31V2MxzJYeeyx8KUuRUVmVK5vVp7iRiRi2vFF6xY1cAtaNKtjynNdS57grsoD3Ar7skvoN1GcbFndjEgXvVq4iPD",
  "key13": "4GfiBEwPn1PTv5Y4GqNDdH8p2VNtLJodAUnSrYmYY4j6tUGmXsPz7tXCAbJNFPLoBj2ac1p9kMxQypbFNMSvdaXK",
  "key14": "3CgXhho7n2rrzgdMMiyzuRzb7MhN4HtuecYpre4mYKqerSNY3mSM621gxCmuMnx33f3v4wkfMtCdNTXyokjE2vKc",
  "key15": "3HRBCHH1rLDVau9o4aDqHxaWqxe3dvK9fr2aoLutu7QZLWFAWs4KwGnpZE2CNLkoigwhRmJMTRx1PCToiZaonVso",
  "key16": "5zjTe5ForBBhMYoRZMyaqxQTQq5pWKp9i29g4ZgCmgn2RSVhbFhij6xY7LdSz8JX23vLMEDgvmYr5Ev6LqBxZGbY",
  "key17": "Skn536kWroiKvAzNXuWnF9rYrPwbEKwyNFxdNaYJJwPqcCrhotb6tteCthvJFDsshWeLZr79B7nNkwwT9PfrqCL",
  "key18": "2T8iCcHT51tHoyzpDbMfCEtjcDdCsMWF5pLeBrBShLXoi5FGgaE6cGgtFjQSmfbUfkbDdxjyzc75tbvPzj9yF3AS",
  "key19": "5Cghx2qCBf1grNvhHMaW56TVgM2rycrxtZSfDxfQqMtcBhRTtrXpXpraE22B7U596L4GGV6c4darYL1JtmuDb64P",
  "key20": "3U93zVvANvYug2KfzhyJuSnfx5en4fT4rPxyu9xvyYcgXQJge4GqA6DdAskXFULFw66JRwPKxeHWhnE4Ush5bW7f",
  "key21": "5oMFCRa1VpAxARoMkXvTA5EFpTv4tUsJfokm147CRzkBquNfQ8xS1DwwmcqV3kDMus8AciWkCWs3c3tQfJvXky8F",
  "key22": "3NYrro2C3543QP1tpzzfiCLQeBH8X4yUXTQGBK118vMon3R2qGexbWWFDqERt5SBnhkufzrThn5xTdfK56iJNMke",
  "key23": "3rH3BieRvNVdoPwKnGGXXG3upXsscexb3kJCVtZ7mPgx2f2gHGCH86QmZDjno4H9Qnqxmd6ZyWnF2hZhUzFCNuLe",
  "key24": "5f3a12n3KUm839KpNYgLscTjJJ3rXLjoUMLZhm6XwCR78BNPYPogZHBupdynhyyV3rXURbB6kMAZkquMtQzKM4zs"
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
