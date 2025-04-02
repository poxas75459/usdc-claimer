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
    "sNXPNYyxL7SQgyy62YQrKt3nBHLotfswHdNVAJhEwBCZgzdZ52Rgoewh1HzHsGdcaujw8zBnM59spV3fFw5LUjz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KjU4PAGyHgFVBBdwnz4YacufZFsr4RfTtPzimmfWfKy5apxBqiDDHfvCqkaxtRVUUiKVgPLSdoMQgoBp4MBN92Q",
  "key1": "5Nz92P8m2zf3XTNQFVaHKrtEsfmXg3CajG8b7fb4XNWy3P4z24SZzNTq1WHtDQSErQxKUFvdiXX9mhhKtoXmJHX",
  "key2": "5VKB4mWYKrHXThpERZcgDbzFDCkJiL5Q5aVECxTKNGgQRZVhJ2rMMaQmd3ngzFvpjq2waSzHEKRtvkFzrgQ7sBr5",
  "key3": "458kaKXkgV7HdJKEyX9nF5V5wb4wKeZQYHvkyHcHvRXa2eHAzVVq54R7WHHcSKKVswR71kyCTCzoFEBSQdBixuvJ",
  "key4": "5S12Z3fX1EMDRgCVAFQSC2S9cicejrgBYmihPQfmKbQ2kwvS6cRSY2jNxUyjKmMXZ6PjqPrgcLApBpvNJgSaf5tQ",
  "key5": "2nL6iQ4UGg1T88D9NQRm7y8JRUwVWGNoKYDsqRp5yGQxkovA6QT4BDfxJ9mHVWcXjNrsydjRy7D29Rj77QBAnQ6v",
  "key6": "2sgvR19sqSLE7myNtbnRMVmVwZxoQGWMRiKxustMwnueeZvsFKoMbYkuCGAjPYpZ8icR8QQCEBuSQossw23oaaJg",
  "key7": "41Nve4KHDygbyo8rhmimFq1WwwLTd5LBoav6JSjRGdDPuggDfx2GDNXjSvsxMSJpLqo477UJTcDqhY9rvUWhk95d",
  "key8": "4U2e3knQ21CD8piRzCfVnHghiMPGEtZhsg5nE8nv2dtuATqyyw8eb3PNQ18oe33uCmpKBmH5nWuYH5HnQtZLSWuq",
  "key9": "2MJN8jqtKJkKp44Hkbj2wLmNXAVRAM4igmdbqZms7nSi2eHBAqyij5eaFPX7vWovRjoE5SX8hrXG6dyuTmudNRHh",
  "key10": "3mFHRkyA3RKbzq1PvAQN8XazKjFCcxphzrjQQA1XiVT81jYEqGeY2JU2yx74nxVdDjiDSTGEW9BMsodW4J9S8Nfs",
  "key11": "3Tv8pNSSQUkzZpXPDY27Y51yLBVE76P4jnyeeA3tzzhEn8f1fDmL3L7KpJWS17f3DuRxyE4YCRsBwAB5bFPcNc8P",
  "key12": "2bxBkqv2MksNAvbXKRDzfcEkbSpe5D51sbGcz7MHCHbDR58rMcs9JVvbmvBp4vgfrNWVhxttapxrZCMxSSnsYrgP",
  "key13": "3ezyLUFVgqLdS3tg5EuutXYD6z8BvhGq3GPCB3GvQhy1QD8rQutkMjTveC4NjJWPbPdQx9jtRWMmRM7JANttMJca",
  "key14": "5SRybmXQ1tbNWa6rCsUrWS9aa4r4CsqowS2XDCnpRk6BzkakyUX1eVu9sS8J8yEBZMXNfSQdwEn9YvURngqKDKLN",
  "key15": "3Hz7VApApa4pdsifGMTXabRKeso3QUbFP3HViqfqydQcC6HBF35Bi3bBVoctkxJmzeAeX3Tk3it1nSi8yF5mWCdc",
  "key16": "5XLrD9LaUNwVzdcwpwwqzre3rYQ5tGQ8n6TkbfXZxDGoupauVQVXpFMRRG8qdd1sYeTFssLsLYR6U6kFmKCmJWr9",
  "key17": "4CmZsxRLLbcF4ToHjqj6P2VBpsi7Q3cCcXofjZ5VtnQQVhrCBGQ5mP1mWuarmSSVtTxRRprw3xmxHrRimti2h8Vc",
  "key18": "4tUejw9YrV9jaE5qcsT6G51TAFyXHgrWjS86nPgFXkinkboM7AZQtfvEuuk9WAB5zR4vZ8eUnpPAGgnsrzGrfjF1",
  "key19": "3a5iFoYqyCSztf3kwjmbR6mTSFt3nifRn43hwGfK2v4PiUR6XXy1MGmYyLkearUtUoCEYoAgEYT3L9Nctkx9h5LJ",
  "key20": "BYB6jxguowSHp9aBcw192a4zdfeAxhXxb8hUP7swdJWpiGguZbBVXhjpUjkxrXh8g5h91nEgNqpYuL8UuFENkKP",
  "key21": "jsjFtgaKPF7SNJr6ujeRVLkJwNt3AnLQqTKbzPv8p12H5E4bKVXrXVXVzf7jJ3TbBjxgiwtA4i3GVpgG99SRcMF",
  "key22": "5WdwPr8t49fSDeXJd1aa1C6tArtXaPWD1nF6LAkwAPLKyvHwocomShEF5RAod7nXv6bZESieRGtAMSKg9FRJjQ1m",
  "key23": "3H7vEKLiheSUacvbVTYgh5U4Jva7A29bJGQxUhcjvgBhPHZbexpc2jfTDtFTuMpvBXFPhHVVVR9tfLwHW5Pdkr1G",
  "key24": "5sj3ioXVHa3aU83jmW8pJuq8RLkDQ9F21ko3TbN18mMDjctNoeSi2qNB8JBPAdRYYypG5dftff8snEV4J6rgAiLR",
  "key25": "5Ngv6Ga3usea91LYcf2yew6hd1DwGJMjfa1hvEbQSqh9U2kNc8nek5GbqSBY7RKzsZfHu26R86byhUZiyy8R1ej8",
  "key26": "2yKgxp6RHJKFt196UEx69YUfHMkt9JJTwProbfUfKLAZTuGanytcCDYeRw2nmAwTmpLf5BqM9gv6LBhFyyHGYpuX",
  "key27": "56ccp3xk5cKj26EDqY2x4jkutF7GMDPkpJSyU8GYxwfaqZHSEharKqnftkkMvDcviGyLVdW8qYkVQa4z5z3tEYRP",
  "key28": "37MLEw9ChwpSZv91PDiArV7aPgPfJtS4cdHwpqXXBaRJjDBbXyoxwnfbuSJwSzy2inead9qQEnBpBiqaGkp42hAT",
  "key29": "4JofTgRni87oNec3Pqs7ssuaQwpytQT7i1jSbJBgN1EFw97ArFxSB2q1J9Q6eaWjpjCKbBTKecNLVktNZybQBYjn",
  "key30": "67DXWSzVYedAucA8Su441Va7oPG2cz5Re5Qi12VYZdJXkEzPgDZo8jhURP2c39qvGF84aSfqiSRxaGnbEEXTFuW3",
  "key31": "33nJ6XPXUQDwdznYUhk3vkHXmSExyTpeAy51edugsp2mVCUXprz8djyAJqGoNbeWun7mBjKrXVvYoEiKPS1iMYtt",
  "key32": "Nr6fUc9NmY8eGbPinKj2mjcPzyU7iJrHT9R1bRYy7yDom45DMVgGaG7h2xhCBPC4HGQUSL6JqVqY7AyAhm3HfG1",
  "key33": "42PYxmLXrFTVN1Q3iVqDhQYLCU7na8GX6SeqLrAk4ZTVyWmSbhVtQmd7GYPqiudsKkp5Mncf1bxERregTy2kgkMR"
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
