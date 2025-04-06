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
    "4Lc9ZvqtjtPNVPNn22Jc7QEseCgvT621hjruCjxbHKeKELKT8TkApzzRjLuYLccLhJ7FV2nc3G6RfizU4ShWQYK9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XX3maSCQckj9hDu7jEPE7yFZcD4gDMaxz7tpBTuEK41fXjfjjSrCBi96LaaTyrdjTbBaqg5SvqfZb4jb8Qjqfz1",
  "key1": "13Agb12jGv78vq1goYrQ1n6sSkrZA36nPeVV7ue26R96vfAYnVEhvbWNNQ7nHcQvR4sPywCwsJbLegrzMKMC3P1",
  "key2": "2ACwaZEr1qJPvC8PrL8suEwR7QNXYZAMHXe87qcRBqvHUzchHq3Jur4KWUDmLZ22cwzizhRiLzqtdProKvCXu9WT",
  "key3": "2hCUwpHJjR9RbYWnADEDkc6pLE1WYaEpUGq3mMgUMUQT8VHS3RwfwX5A965hc6PdDmXpf1fxvpN62P5wu3HY6idj",
  "key4": "29H7A4JdnGJEajaewXbmevbeNBRCKMyr9Y9PWEmhYxVxJCPCpdChTyxPKbqvtqmLWmGFdGzE3Ua8pT1LcE96F8np",
  "key5": "2D8bTQr8PZ968bDvwKjccDNK89XmtSAq6rAfrX4zD4Zzg3Aied3ADXqak1TvoVREmcTNgp1uctNNo59jrkrorrC2",
  "key6": "2GEienUEAd26Mj9oSwNCX6zKws9PvjnU4Qab5Jra61YK6q9G7r1VfpjTbpRG88wbVmz6m9nRqN8B6XAVut2X7wkD",
  "key7": "2u9e6NoZtkY2EqRMYedjBBdc1mKZPCykddtXLwEYkkiu3fXCPSCg6EDWBYjNAUUjFJtS61Rkcv2wkh5vwtRBJDNS",
  "key8": "4VCVpF5HEzMBwSyKoy5wUuiV5cGejVduCbg5k7tKUeuCKkKjXBjKgGyTpsSJqoJnp1zvNvcZV7oDoxTYQW4rQMYF",
  "key9": "FoGtcvmn1c9UYeuL9qhFJT5EKShMjiMB4XSCERwLbX4zX7Vpj7DkjbdsWstuQGSkMCbRuVaek4Rc3MudpdwrJJV",
  "key10": "2RyoAG9Hg6WiT6MqBXHZWCUYhgoKuijZ5F6p55husQWrvwhTiRxhQW7t3EHZkgG5FBoMm1HmetyfT91QGLDeNbAY",
  "key11": "2sXJNWGjMBGqZcjWBR4QywqQAyFrCjKrhUVAXjB6kmFoBZapzdtrkrUVzsUEBPqYztdnDnkkLU3g3A2UB1cryEGA",
  "key12": "jd1kjHY1ddr3M4Z9dYqxhZNrJXX5SKW1WyGFM9aDQiRsDMwYJUhuqvXTaTukKqzDEGavkjbc4vGyVAw7fBt7iLt",
  "key13": "37YVr9ktb9nc9v9vWSbc9sHjFPchKgEPmc9EPZzcuYMDyhCB2eTpuogUdptNn9AHqSvhk1xoSdPszzkQMm85toz7",
  "key14": "2ov96Ki1u8aNaG3YBaaJcNS52Rk6D6h91BZcUhAwdhh7SWgdxSKiNApr9EDUwje2AXHddFWDdQYes9fyszGd4cot",
  "key15": "3vkcXu9yGSXtZbhdHx2hbp7aAPGRWWtsHV79HACDiLX3mhBygxv6Ndbzcjk5iPJ4j8RJJbT24HU1SxwVbZd2vysr",
  "key16": "44UmdTJaTPSPdg36x3zdjhLVNdgtMPBagdoPY4du42AzosbHS76NTozKbijsUCDBsmrJPQo9n3pxxAgMKw82ZCtk",
  "key17": "2ZHQgpVeGMrxoWAS6Drg9j2NW9vH49VHD15GMVytXDdWACuUyAwFkhcNdmrEPkJ5vvisyr4c62taKVcW2Y1cvvgs",
  "key18": "4r2x1rxQo2uoaNYrcRYN7KQggKR9LfbfTquND7ZDZyBZscts8vtKYNos3FK5xcjicCFAK1dLswf4hM3BcxADYMZX",
  "key19": "YPNef45ajbAYBpiKx9mjP6D34Sh1dwT6Z1NT4iYYqQZ77TMgt414rjF61b57qYT1aPhaoGUTSsYKVTXFC3vhqVn",
  "key20": "4pLDEDRZXJkAvSmVnMcmsLmF6s7iuKC4RcDE7qB7MDsv1Zx2TcbikAiyLVHBwp6W62o9Uz2jkFtDrqbVn2TeZczJ",
  "key21": "3pEUKGGsMWnHEyttzotsn1LmdKV6pqVrt1gfzjqvyVELg6He33pUWdGMPFkQeLvQp7q5ZfZGKV4L86AGA1RKnKPs",
  "key22": "4WA9ojBYZB7etBpykPUAmXWFtf2YFqKjEHco3mEvZjCMr7PhdChWBBpqUZWruLS8vgAeKNwzciE1UcGuxZBTaMMm",
  "key23": "28eLvV8HjsVkHNYDmaKzo5Qtj2X96gkadwGZGahs33qQnGEVjymrsJfCVZj4xYReVgqPwCqUhFrAMna5hgNa2Z1e",
  "key24": "2cScXXPfccdsAm3AweUgwbvASaUCsLMxNyaSMzTBeEDbhNexUm9oMbqw3a6DyQB2tu4xxhDnDJwbHq3U1fWQp7LD",
  "key25": "3d78NsZ5Se1ZHhGBPfw65aYmvjBzhArgV6jhJm9rH3jooKDHRVKGSfx37xuidLHC7jNDxjhQPA9n2d7LCN4MtbTL",
  "key26": "2VxAAGXBtgHJmZFeuSdoJgPeZXjDbts1puVqj6hn9CrMPEB4MDD29nsaWDHszPqRz4w4vE85ctjdzBm6mjDQt6rz",
  "key27": "iCQ77bVs3fnfSdHzHuPfpGdNRJf4xFx41cAizi4xDbmMBuH39Sb4ckbh4sgLfayT3eGqGCGM6L55vpVD7zcwK5d",
  "key28": "4oYouvQv7rh2KW4VpGXDHH2gRnz8m7KifuGWSS7qJxWcndHhdkTTMDKLKPLUXEpomsF3xm1r9cibt2VFtSsh18ox"
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
