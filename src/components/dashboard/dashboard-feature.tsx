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
    "4LSzuEYExUA4MbiSDStokNak4BL8XqfVcnXWvqk4wAUAbnLkbk6mwGFxQzoSzwVbW7DKBAkQmSmzhBzQuqnRSq93"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2NcAGrs7C9LcyARuf9tL6zUmKAkpTjqdbjdJRTHEznMEP4M6TZ8PxqXmiHZHfjaBnSvBoX5ziTmFrgRws27aSLLW",
  "key1": "3WREbcUCbtd1dBReDaySBiMSUWdZqyMLdVzGQwaWkkraue1SfiuSDc3X9RSHJt1Vo6pUh9uy57WNebFbfmkDpzKs",
  "key2": "66gTBsx6d8Egq4Xypkqmi64tcH2KRTMCUaYX5F7Gf43Se2qRwNg3h57WjTTfd9GVHYE7P19afk1ppDZruGmtk2Yz",
  "key3": "h7kur4obtDo8spZaJGqLyoGKBTrt9igJCxDpxUbKUK7MrwFybPY3MQnCU2Mgf7Y9fyUmgfSCPrH9MtjfkGsWgBe",
  "key4": "3m1imV6uiY96PFyhAiENPPeDRb6sdrdW8EpNQSLoUDS2ykc4vBxBHFnFmqrupKN1jNhZcK2qr4QwZsURmxod1sEn",
  "key5": "4M5PLbZW6nmHWmAxTr4nHdWwePSoQu1uuBdhR6cPSH2315u81Q2MW5XkFWmqph8L9GPkzzcYEMFbHdBZW1EB2Nga",
  "key6": "4Th2NpET9oPfbs2m9N9bmxRCfP5wXKns9FCqiET4ba6gnFvXRxGtSPG58Eq5ukT2HYKKrCDNcJVfy9JbETRBPNet",
  "key7": "25waaMmDznwq73orpr4tDWfFF1utoDfsGnt4SVWZvKdeP7SDEcL3AptYuK7SVgZpnK4qkdD7mnKRwEJbtEQMDjMt",
  "key8": "9hjDJrfcU3mh7kYZ7xGUnvD6bZL6Wezb7xX4bGgGMAXaxvRB1GjnoTP9vymJQXBCAJ6bQ6CE8DKwNqntkBKYDNw",
  "key9": "3bXqjtRd2spUzqdU69LREmWojVVVDqXdFVwiVj3MKLjGphSVRwRG2dFNbsxZN4beobHZTM1gDKZT7ZBoGkvXgZRk",
  "key10": "2hiwS72QLYRuHyxjhVjvNyfKpEbuEofKG5L9tSDQXGupdpgKPethJhHfR7GKSH4azLkvzC2Ai1VqxBoNkATyUCJE",
  "key11": "46Z1pp1qESodEpazReyg843hTvreHP8vpX22HwSNvkztW5NkqWWLGy8WTkLp9PXoXAsWhmSC8oRsthRQrqiV43HV",
  "key12": "542LkBbRKBsKCtnJWSBfm3YzteiKagKsEv4dJDsYdQop31i5paGc4RmP6pqgAu461witTxqjrqimD9yHbj3QB2B",
  "key13": "2N6drSYmTmgoENy8g45mpix3tY6hXtAJGAa1w6T5HAqi4Ze1F6tSHbreMWtpTfp1a8VTKEmEfyBsjyVtJyeeQcpE",
  "key14": "4KHmdaAreoudx6NdFgEr1NY5ss89zLgVFoGuiXYiwN1TXarUX9X5ff9TVUXhmPcrYzXT8HmKLE679QKz8uuSiS1k",
  "key15": "5ETN6gt3R2nbR1KhUsanoX6hqwS71fZe5ykYGUjX4S3ppc719CgU6ryAQxj5JZu6uGAypwdpXeRrxs6Cbfa2mQvP",
  "key16": "2iKwSgTopJpqxuURmgJNgEFsgiWfJyNgi3JeVwHwja72RX6zrTQnpQxW3MMchfmQFN9mUuhh7f6WvcRp7KUyDt4t",
  "key17": "2HAkZetAav73McfaWLpu5K6CsG8LWaKZ8Z9vxNwCZEXjQMnzoFQz61C5MJLfx2nyjESNXSDyYhnaFZGC78R4PbNX",
  "key18": "5FQYfC5CDHJ9MRSbkrKLkrsiUfjpgAwanUn3ubzDsH3qcgxJJnTDW8A7Mb3BgYwj77pnHSfVyz67R3QUzDvj7ppf",
  "key19": "3HtG6VR6LwXnQJq5vecPngQWoNhivcZBpDubKvMQTo8XeYVhyxogyB1tHbmGbStNLUFVMjBwR9Zt7iMCvdcJZXCr",
  "key20": "5a9JZCVpPsW4Zb6Bg8hRLs1hoZRPFHPAda4K8jYCic6kUNxtFmgoMgxnfuAaXi1aGpenoV9rKFJZKyRHpFvDUiaA",
  "key21": "2Z1r3LHEV1v9uYP77Ggn9uH5JUizWfPuXoLShuUeUKmoAi4BSsXf7H9rNZ3trk9dHm4cbDXExPwV2iGNK1AyWDVo",
  "key22": "4YheZzGVfFgJYyi7aGZB88kwVDHcQ9H65MCjJqMRbLEobGTBPgM44RsWGWLXJAs4PCz6boL5w5ygM97NdcVfrm4W",
  "key23": "5JD4YUydxfHwzYpre51oNw1rq85ZbN7TEDdzsVDwESuiWfmetrRwiDE5xwojxY1BjstNdgywxLeLS57bAADXkB9M",
  "key24": "3faM2q7sQ8FeVQ2HwnoC6516Wkv4RzfTgBPq63fZ4jDPMTpe3K3LYyW3iomEPBKMtGQinYoSJgfksaY1V4jY4RrZ",
  "key25": "3CCDL7Uu5L47FPXB3jnTLjwmAqeFb9xsuNcUyr17i8A6jk6QWntMcfx3XNx511WsfsibzSuAycyoiE9ej6JL8Hht",
  "key26": "2RdhyZ9Wok682m6mnpfaqEvSSPtuSBLFBRxDNnkKvsEQc9SocYoiUH5xMBoSb1cu6UReYJbyfqSneozy3GKy3XxE",
  "key27": "4X9CU6rnbRvFKuNe7yq96sg9qFXjHEjXEYWZMDd6mAjxGuFRMZGY6mK3Hw7ttyfjq1cMo3F8nzKjzNfq9gSoYoh8",
  "key28": "eNtH2QPV1HPoXozmEzU6zU74z7JJrHGUxbvYLZQCAVJjs46dpubvcgAAJxhGxhvK1fgb14XNchLYY4vZabxYPc9",
  "key29": "66DeZwxaVbKEGUFJVMqh9RT56gznXu98S6nZWFes4mrZoTQVh7FQt29FwJs1nfpM81mR97w5TVvh5sf2yWrZTj5h",
  "key30": "28Ba4cBq2a1XRkZ9AZ5pAg69PTkueRiWbPZERPVQp3yppQkqRPy62wwCwZTg37vJSM4rNsbq4yaPFCymWqDVRfK5",
  "key31": "4Q5hkKJkwkAoRb159wM2BzcaPzJLsirRgPwP3emW9omrzTVSWZg2Js624aMus38cKVfgLnVMvjyabTPc812oydM",
  "key32": "4Ltj7vHK16nAvr6nSKGNjL7VzBp3T7ZXhgPeMX7FEGhZH4mWUnAbSrNtouu8QeZHd8u5Z6baHnbYAbmiEb7nXVjh",
  "key33": "3Z7heLVDD9sC5xjdWDnoL4mXp6cnoYJJdWwGQmtxHNmn18ey2uEqKXqezf6K2Dq3h2vBj6Fvpzumu52gqGKCRfax",
  "key34": "2RSLRNMFkCKeyZPsEgPrpRDRCzxt9fbj95zcTwnqtzw5pKip6gcLSZJi3GLGE3kxMqC9XTPGgCDExDkJFRRMPHAP"
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
