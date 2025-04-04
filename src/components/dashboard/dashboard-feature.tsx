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
    "5UKKPcEwPNSZ7evpbiv2bZooB2WG2g8mS61FEZZxhyrMizCEy8cNMtEDXTpoU5JibAkwxef9Y6LZVR91chwYz1yw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mmL7VRUuZnfN3rx9iPzAm31YYsVWFhpywVAbnU1vkszEeTwyo2S6cZdT8pu5Q7BLwEGKSzWCprq6XBZVnSqfAvB",
  "key1": "5sfsnw65dFApQ6zR7h2bFoakzanQ7g6EQGBgH6Dgh2Cw4CkmZKQkV4FfBB1Me3kPVnZSHFXPTPC1ruv3m8k4iDZS",
  "key2": "5q3RHfQw4kV2nTTwms3coJmPhhEECP5jEarEesWULvUGUoj9MqaAQogDp7U8vahWSCneHoiqNLQeTyFMJwGPyKKn",
  "key3": "yFwcZWJqd59CJM5UheTFJjpr9S2WX8Qtc7cWZYrXs3QNDE3p4KRxn2hrePWHr55gFbE96B99vuZQL55Eixs9LTY",
  "key4": "64bZfiJDHdKCVw9C3VstadYFmPucKGpG8gqU5Rf7JCmHFNiF654bxqZLwTyG7KcuxsQQmaryKUuBqNHxMZ2P1AJM",
  "key5": "4C26E7n8qSGKHB2JUHHn6PNKiPxAi9QNzk4GDzEubREDxFFzmxQXuRhsYR8wTjLrZQsBCnUVhZeHNvb6bAmU3GZ9",
  "key6": "FqKiFGtDN1jzZFFDBKzG6JCTvTdkq4aj1PTFrnYBGwbEHHtxggt5CvDChR7PCHJyjp9n4d2Sx4R95cucbhQ5e42",
  "key7": "sXxsgKP1bfhTVeKKCi5cQBzSqurDshBe4X13nNium68H6QKCK5sUZPx417iLXyTULTKVfdek717pdEryjPTNebV",
  "key8": "zB1ivV1zPK7xiCsRDpawjiuU5vARQ3kW2Y2asxL8JtsoqKLAnXXfgAcj8LCAim7etXTL1kBPca2hU2dwdGWttTz",
  "key9": "43vbST4vCj6117mbYzVcmd7J2eUXcC2QRigcAH4Mf7w1nH8HuXcf7WHu2B4U3pbX4cxmE9zXwyp11LhFSGt4rRy6",
  "key10": "5iL5ZBhHhUu1GMH2i9VBot9i4SG1cDmQXEBzEJWRrRJQZLsbKuX8pbdp9srbzQXEUTvMNxzgQ5QUHcFgqFfCGDpu",
  "key11": "4n7bjrUkUXHUvHuA63xQUVgoNDLFiPdCMKUfZyw7uNd6tw13YgFkeaXbDWoK4p7ZgYwbPMooUq66VxPSZNDXPb7R",
  "key12": "3hKgfUFN2Sci8S4bgfiEaWywNG5mEuCDsMPDS7KpyJ6HZScg62772mVq9t25UnfMeD8fth8VJGzx98dJb3gsWW16",
  "key13": "22odrNxfbr583DFdqP38xfNE3B4stjCChb2pe3P5msssFnymM3VxnPqVPUbnAgqFvMYRsPD3o1dHHJAD5XGciNas",
  "key14": "5Eg6NffCn7xf2CsbaVYSpeLLQizuqsV96WEnvCccnctA64KcZzoBd8yuhZYWRmbrBGZWVxNSSNUeJ7Q82Covh8aA",
  "key15": "5z5VLwmbpMPZRGLTXnjzxYSbG5eFAbST3MXVAD7c2p5mtRxGESnmQ1VJB5Nqece21Yzy7oZaZq7k1VfrR7MYwPTr",
  "key16": "47poovvtkqcvaUdWVLZQyQkA97jcSYDM8baksdDV5EfjrL2Kbq8fk4WJuWA12bMLXSvhCeNaGjAV7oyy7Ao2kqyg",
  "key17": "5TGD5cGaTiB13uevraPStCXDEhNnPQPn6LtRGxiifYNX8wyWZMStManGeUihooBtYcgLU6ovHUwJoHZE2Mdsegw",
  "key18": "5jWxdWbE8ZubCq11MSueVKijk6okGcwCmbFAi6oBTmCPEvnm9vF4ZT2T6rJUbeKD2iN49ALqF4n6tehKhddyrdBM",
  "key19": "33bzqeTHCpZ2FqafdVbodaQ8ExMWcZTecNVDoxiPCBxsnv3TJNaf5yn7wc8cEaqB15emhtaqYjWxUaKV7Wi1Tdcc",
  "key20": "F4HZ28h7gACmNHUDQ3g2QkNhmhPxUQAJUdR3e3tdVE83nRsPAPbZ195Sw1g3AuTCBkdsHBvWBVVcnFdnyEgkuNQ",
  "key21": "y7uqEArdFxipQbw57JZiAjA3msUZzC7an48brYNovP7P7nT3YVyqoVFxGM3TGvnLEggfN2efSB2wekgK25Bdev2",
  "key22": "2A6v7DAS4qgQX5cjuBPR8tvw1gctdubsXw3Vpa1zNcWR9pyvHC739TXSEb7E4nxoU91Kf6v3bLnSRREUGEJ93jiq",
  "key23": "2yqXvejc9MvgxX1C6Ykc8ZWFEhFCBmbvVcPGemBtehMbRFyub8RpgUrfcv15ioka6wqSn13johG6Yzht2yT7ix3m",
  "key24": "4tJh2tXEyuPVBBcocjF4kURwNJ7C91RXLmnBc7jsHwKzCvCMqUeW3MLzeeijPsykq5LdoEtAPwaFBuc9Thaohu74",
  "key25": "4bmBCpD47qGGcpDCnkGqgiXFmtHXZUKuDJ9acUKvz7yztb2Feqm3ASV9JtQqEcRLrd28EmtKQ8NiHgYccLjrwJdd",
  "key26": "wtmSM2uyPn2LQ5Ka3ro1oXmbA7qXvyt7vqcaoVwGgydmCUidupMnsLzzuT4jX7W2hJZBem4XTiuvHFTcBd473oe",
  "key27": "5VQRayfQGEehCLjgbRtfNH8bNz7EJA4ejiLeCuUFGNUd3epiwJUeYAuF8BE8H6tKGMNwrC3bniHADseDMavLkcaD",
  "key28": "2PEtvD55N5EkYov1WG6XM4vDFcz1nKTvinuv5WRxNRdftEWmJgasnukh1tzUeJJzAWj6wJWK9BFYrU7eyNaxoQ58",
  "key29": "49AmxiouXuD9HammEgr9ZQ9NsEwZr3bmZcmVdzHMG4zt4EVPHM8PQ1tiyT9fN27bPA649pjMXaLneMdjrCzyviy4"
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
