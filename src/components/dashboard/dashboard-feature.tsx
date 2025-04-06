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
    "3YYkiCGwBb84d2nriXkY2ZAxwZE4eKkJrZQwQJGhe9mRDxRtHf9aXtC8cugm1N65e3ADeJ6nk2GMjkr8uf54frsw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a21MpU9fsXhG42vMVxTZrGj3DvJYmUKuDeNZW9jNCF7utE73YwKk8ne4mXMzUb6VVheiGHiL1ZED7Chf8FmQDqN",
  "key1": "4V5r4h4mVrxmrT8k2t6HcST9j6oJFkk1AHtUqPeWD8qHsB2TN3p7dfaCKvnEjftuqHnD1mcuYbJuS3vuYUCmtAkH",
  "key2": "44AKDmWp1tbyww1kxk2RNJmxaMgR4VcM9cuGy4TknRvC1hQJU6hVZrFfqytvtaqZddff9D4QZvuYJGLRPBLWVxki",
  "key3": "3tiRHH3onmZ5839xQHnbLPx2m5t6uSQMy7mpSWiMCVHVZXG3VThWQbuPhDAxFmtJRaUDAaNL4gPWJkNKyNs6CUq7",
  "key4": "4A3vXDr7aJ8eTJXh3qVJVZfihcA5ht274oU2Nh92TFs5HBD2S8ezMBYbuC8KL921dFGpZuwAzp25kxcpijp3X2S",
  "key5": "3rTxsr4SpYxkVpCRTawJcnCA6xpo7DPocPuk2VTGbPf8D47E59PZFKTZpQe4RV4NhpDwq6dMD1e6fnkscCojowc5",
  "key6": "2fbCTJ8AXJkcnRNXkB4LBNo6YnUqiQ2NeW8Fn6eVVrwusDpBz9YLGhxvQphofmcbJwFJUYDsvew6YeDv8JYy4X2w",
  "key7": "2xvARL1gX2C17t4GvpFeJcEdjr3f7yerhMTi15aJED27oM5AEwhVcoxBLWvRqNBvy8nJqqg9mDNHW3dRA5GKk7Sf",
  "key8": "4dt7wSUD9WmSSb2SnWCMrxEDp2fKoKmGJa9zmCeFQYpgmQif2N1uAHqYSBw24XPD8ypnC5wCLAawtF8ELuECtXhY",
  "key9": "2TuvY1sGAaBMHZFy48dvVVhtGi8fbegoPe2dedDgXRq7WsAWL2iUW59kZuc7B735URv5gUhPGEwA62ctrKyw2aup",
  "key10": "3tpi9PAzSbKV1LqfNRNbCp1hfKkWTDr2ZoesvPUgaZfizakxgVwt8mWMdvV7tCKSG4i1BvHHkvdm9fADSeEuxXbt",
  "key11": "5oBh9yzEvR2CfBwrAnT2bJPhSqeT2zbcjKbhBvUdruA9VFwoUmphQChzfMP2NngcpEQYzsX9wDwVaNVmXDfPHLjX",
  "key12": "3VHicuSHfDqp3hksKD23v32XXHRdtYCzYvyCx4BPQPs2kzaeUf2yrYM9TesSqqTigpVeWFoZaPZAGCSiN4biQahT",
  "key13": "24ifVGixHP8hMusC9zJ49T6aLjAhZ9rHe5fKcaJFU2jaX21gZ1uJQAdkMCWBv1A8oTTAeCAd38w6ppPkV5Bssha8",
  "key14": "5upDvbtHbdXpd2ii8YTVZYrgekcuySAQg5N7xwMhiohQGxUyFe2tB8jqSwp9oh25UCWSvQvQ27AkUryXRpZuXUdj",
  "key15": "41RWFfrDbx4BWSqP3mKd71HLP1tXqQHxXEh3N1cK3ZWhrWPhPF1G2Kd6zPxLk9TiTFD1caPhgXrktdtPn1m6YBZa",
  "key16": "2a8Jm8UVZt3cNKv72H3CX8tAWAmoRSE4Z7ocTzwv1Vf1txq5uLL1pG18XxMVGTbEcn5Ho2i2W5J3r4CyPSTz5wnK",
  "key17": "t2WvK5u3VbCM9etVsc5WGWH7G4YJuvCmnSxBi64mxabG3X1yuxkKzbQKbYCd42jmYpdAA9zn8nQT1fZj65cg8jr",
  "key18": "4SfbY5r5E3TvrPQVm5BCzgneTCV8DyzKMDycaBHLyf54HBkqyBmSVZzKkhrww57fHUM1EvMVGjiX9gf2bGghK1WV",
  "key19": "5yLgQetHCeUZ3fmyGcHftHhy6GKnipdgG6snCMfnWDmtqQzZwYzYdNezXGfKeUrKCmgaVHQaj5oqx1CF6JhavrFv",
  "key20": "66Ucs6sEYCp6vHz5Kms2T5sSd1hxkKdo7wqRFzthqY8jdzbvS4TN5JLmW3J13jk3UFureU4ZjsRGPd8ohLMkSAhy",
  "key21": "2PpeBfQjy6Dg3W8SN3d3pWtTm9zDWVwDNSs3FvHWVUgrorm6Sf2BbmUK65YEDow5apXxiimnbjaqwovyP32LoJ73",
  "key22": "3yNMtHC1fk9vRFzLJoQpDNFHPwfe5i9b5cweTk6izwncFHcJVS5dErWo2FSQ7zhoc3AnoydVBww8Ni9kEudhySyF",
  "key23": "2vfKQWExTBRmT9WbRaWYxhqoawCLhz4uxN8qavz1wFGgASQpxjRkgEqTdor5UDMHL2pzGzaPnc4SW9hF5YsurThJ",
  "key24": "3NewjH6N6R9x6ges4RHtH9hRwKrpPtgmn68Xwv49sdj29bZx3RaxyUdbjpFHwwFpPBgv4n1qBGE1U7wsxEN3eziA",
  "key25": "NFLqyvXaRdyNcRz7CEZ4hBSEvhKMoq1eLcKcXbLqgt7amjPFynoBfCFM6EgDKX9RfShzBG2gPaFk5KryPZV47zd",
  "key26": "5UkQMi4KX3CMXL6FWZni55t7XLkWxSRLWcRu9H75msr97pHhY7MpJxxYmFDDYbonTnEFMNWFdfAYTZk4DGRyaWQX"
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
