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
    "5HLdswg4qiKsBFC52PRQnFrc6mnSRjJao1VXprDwSyaw5HYz323U7i7MoETj7ZXGrKp7jowXNa7vVdH1T47C7PdX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UD9mBsLw4oHcqtnXpNLbdntXGC64YPf9wJEm41QSPZL9BEiJBESGE9F136XUgc8ynYDPxq3zHCyqAdcmMHR4Ysx",
  "key1": "4XqUxHjVHGBiYxppRPLwyytHr6Mne4nMA8mMf4bHa5EvRutWMkiKQM2Y2ijcQqKT7ugNxYFVZ5ESVS4TfPZQtcZa",
  "key2": "3MiqDkTq8QgZ983L9mYNqTHPZhU7x3EjGmhHsvSuhKxbroWqe2zYKFjdpwA9LVTWMuijBTfJtyhAkQ3baC7Gc4aa",
  "key3": "4B3ncgVKee6sd8MsPtTe9VANwR16pPJX146nhSmvfaZuctz3ehvZbh9QWdSaTrUvtAjndZUzpH2G4QpAqvTHGYBq",
  "key4": "2PFmuwcbvLQjsecrfoSaQ6sm9eMpMFkULewB7vpuohpgj5ppCh8DSLJPmqSNc8d1LxVm5pKiaR6r7sG3iXQKHDnG",
  "key5": "VU7QDSRFuvx4KN3y2T2EKPeK8wiv9nAX66z2Gikb47gv8z3n4j1xzPqRSdDGfTx2R3a1diCqGMDZQBpvGdxRwqf",
  "key6": "2qYaDz3hWYBq6rN3nSXtRKR41xM3sXTGcWqaWSk21bKuihLrAENY4andvcsfRqhNVtDuCQCTwAHbLyEYTnhYdgQ5",
  "key7": "4sZWHLGbaLtozxELsd8Q56wBGGRDjBvtJ4WEfujQ9C29c3oiYYRW223YSY3Bh5u2GWJqQCg12AXx5w9ejN7nik8i",
  "key8": "4VSaBXsJy7itQYRm1nAHjo1Bm16nociqXAjPTv4eGeZ3mBRwYspKWa3nX3gqCiPDEQQzvZnsnvkEC18XVMHrfGsD",
  "key9": "5hdjufRKrTCKYuiUDCfu8S7vPvLaoUPgxArm6qs8JQM2hn4Li8w25FyDk8M1yx49JZ1tn5DTEybgw6EtK6BGByqv",
  "key10": "5wijmvQ5fub86c9eKMMxuw4jvqkNFsckYQPBgFxNSoJGmMCoiXhuL6M53VWUSMjHYeRVsPJCdpKTu2eef34yiFe8",
  "key11": "5JD1YNPWfTDpZGu8cKgoT51oAh9AbjCdHFVc2FCj91VkKaoMqrBcuYzBqP9UnP2j99SStRqhZoiGQ41Y6zCUat9B",
  "key12": "5x2gRNEi5fffZpDtFxDRp1KBRPyVu1oLCVBnFFPzmFC7bQz5dAMzKNnHcGj4eyjksp84xvumqCnBVcLCwPcgByKn",
  "key13": "5Jm1ZrYWFr9NtvvoNg1JJwdbYCaRCwBcShXkAnzMkLBoqfN4ffM1C5uaHsMigVngHCHw6gJGJLEo4u2E3SxKdxNR",
  "key14": "Lx2BrAhWp91urEzuGGFyCumLbGp6bLQbZ2SRL3jSbzdncdp4Y88jyQwWA48t3yrdFgYgcfC76Zn91jD1771X8uu",
  "key15": "2kr5CfqihperwTBXLkHsi7KB7gTLTt9a5nArokmjtqJykwgdKFMCwmEjkKGqbNEresGjFQi2JCUrnjk2Si77bjbv",
  "key16": "4JVQYR3wkhWHYNiJFohT76qS9PMZGftxqFRAxFEqNnvKewybfHfiR1fZh26W1Lqf3LJp5keKVCKcNDPgQ8iwLv51",
  "key17": "3gTNy7zVLKrGitG8FQP1eUtvUpPdVLyMwkBBMBSFpdBXfKbqUYVwmRvrR5rf6FGa7vcSTP3ivk1GoMMuFVzvksqd",
  "key18": "2dyoYuefSM4KP4GtrgRzAuYqsRwRm3ZfQjRGqe4DJHD2CsNFpYUc4xrU7qaKtRADik5cuvE4P7o9BVG1GhUGDNFN",
  "key19": "uNGgURweuRQ2pWEDU3sUo68ASLFzWbtipdiePEk3EDYVqVbnULbB362cvM93eWAigPB7KVseegek3ZLVAeWP88D",
  "key20": "4krLNnMq8ZRd7zFcrW4BN7jsd3N9swhkUUMdKzZHv9h1V1y8y14LenYmdnHjUyNyVdZkxVqraTGTr1SGiTpkZxM7",
  "key21": "5xSKfTAxzogAgvcefmoQAVfQZTWwdPujPTahSgBv3jcriRwdre47DUMFbbzYYFQzrZvTFXwD2VryB4AQeBdogjw4",
  "key22": "3DuEsHdpspvYTpdY8yfNY5tn21Eg3E4s8EF6iL6jbMWbmbrxnk9dnou4T1Q6zFatCi3VaU892nzSdgmG3wCjpbL4",
  "key23": "3kG8o3YbpAqm9iprEL8U9HmqBQn4t5odUg9bMfGG1ZqK9ySDMuWSMN6msQ7E6qH9HRvkac8JbXPFpnwQsSnbmPnX",
  "key24": "2VntfnW4NuzuF9SjtxeeCD4dueV9LgQSshJcoHCyDCReLtzy34LYEgwFgTrKWnSpJoMYNsQ5shQ5Kj5G5bD8q8Fq",
  "key25": "UQoQsSRzwCimPWwNjgBcVLEH6q1qFUQhANKhBTJq3xCtpLfXDfuS4vJS4usvHDR8p5K26GXmR5Qf4xMKWEnCFgr",
  "key26": "5BxiKMx6p7bHB4hfjhX67Gkffu4g3y32u6KYAJWzP5LiDkwmAXiRJa8qtfVTf2NBgBAgQZ5u8geZvb1XT97sexnM",
  "key27": "5yG1NCRsQoXSWzr7YxUFA3QgWkg2k3oDmvkPrASAW8WjgrnDY51td2Gdohy5NiZJkYzjbBGnpSSNDGFeMsu15gFP",
  "key28": "4Piu7NJChExPVaoYE1xfRdwLTznsrjpaLak7KnppUKc4cJmg2Wwvck2iVgRRcgjNoyoNbo3jLoR3RUmXn8sWMHLS",
  "key29": "4KyyZDT254KZemKDvHwBE8NGAU5m9xPsSJ9YvwiirgxHMgVWySYMnMECguNMasodRewK9V6SMEF7DC8Fb61boJ79",
  "key30": "4LX4SitVBHam9EgRX8QoniuqTTYvER1uNB5QC3dnW7277WS2HF6hYoaZPMGCqEWPUH8Z7h6zEy4c7C5mZ4x5x6xb"
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
