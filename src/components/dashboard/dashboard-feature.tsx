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
    "2VK3SnDJNyrHSWU3ZwYiAD1s4vQk1bB6gN7vBuaQByK6S5K8xiMMLiSNDt9uE7YCxNjwfGJcEG5GwGwnoNh3wTtB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23KjNg6P8pcsyz2JL9xrTHiNrxVKkBMohk6zRnGcWDUYQXUw9smiWX4CyowkDZayHgnHnAp3t5fhfPUKEAY3FxqU",
  "key1": "TZruZodALuxGKFCWJ4KCc5eFaqfqbKvRn1S87tCKzVUFU6Q7H7wzQ65D1v93y4orsUt8rwFBuaa2inpbNJJJePz",
  "key2": "2aFqKepmgt9YUAtx6fHgCh1c2DHe1hjWf6jni36U8HWQZJocNSTn9njddV1MsFWye8ChYaxzPtWWJKVquF4P6tXf",
  "key3": "5xRChwsbP6EjQmvb7DxxtpXr4feN4icphwTQinwb3J14s2fqd5JG2e8EQ7CYjAqki88Uoea5Qy1ZRT5kDhG8F4Ve",
  "key4": "3QYieNFnQXJaQe92VJoZJ7cwZXYUE8ySRKHyN8RYiS51qgKUza51JMJ9dZZG9gJoHHHydKDHdZscUyed8A2szRZq",
  "key5": "4xE4kxCcS38o4YDSWFntsRMvYJqAs79bCjEJXoYAPebY2kyFPW33wemWHPmNrruRRnZLhmkFG2ieVjiNEheL3mL5",
  "key6": "5gkF3kwyUZZ6HDdLroNQa1sD2PomgAHVkJzXuWXCSj8EEiTW7dPKmiWfB5KueDxzwdedDsnadHEpS7J7jW9Law8Q",
  "key7": "5MCGFxo22DngSeuabgpo3DLyh8SQKJgDWGbRFCxEZeQLfwuvTyvqzqVvjfFFCjXm4mZz4cCy8ggsAamLuRSju7Kh",
  "key8": "5XeSNr7Njxa3fS5f6Vc5DaN6Zp93zMETvPEzy9E68tB2GDiiZ5f4LooqWVTEWFYYEwjeAHWZXedUPsdEJ2H4UZ3w",
  "key9": "5XWCeAboWbDDzonU2KQvZrzTGoKSEn9B8edkMCSkQb2BJf38jRhavpLWY8ayZokgVd7i18Pk2wwZnDi79htjumxq",
  "key10": "4LRfbrVatE6rrZ7JWRycE5kBNQFpXx4rT41ydbLqPenqK61oZ5YcQXTRGErUxVhWocGc7SmaJAMDpdq5XmGFiYA7",
  "key11": "5VymPSPzv9cnA79DNaDZTgvhb41VThiKPzqaD74MrhBFBsco7u5zMwvYAyFjVTo72Q1VfB69p9Z4NwE9VrEbP7nF",
  "key12": "3b4xzoJBMx51eJECFQTLfpjzh1govs3aEPS8q3uzWQx8GyMV6gkkq44HAnJZWtGvTSD8ZUyjtqUaXGSGM7pZq5sW",
  "key13": "8WEQnufDxp3TrqrizQQ7aQox7u4CrzHhDamxef9khABWgU4dk6eRG7HLzAkM4roA7tjEU1Ap3zfJiRcvcdEem1r",
  "key14": "mkc3C2hV5uVjgUdXFrTA6zAgcgQrjRTom6K9KBGBCBPabjDSbFUmQGZEdVYgJ7Fw5gTxfYgsg3fdoHqrgdHsjxN",
  "key15": "4W16VF3LzeJEH2QsLPPj259BAJxhQGsRVAbXeXiX7hL54R3s4zE94MNbZzKvUVujYU3WSThbWXBhcaXTe7pXmn76",
  "key16": "2bWSUf8dCAf6U6WT27GZ1TBcA3iReZQTVWwMJL8NYqkn2QzEcnFT35xxVjCmdwEYtzUsmVM5b5ikjWCfgt7DH7fE",
  "key17": "5YG4tYaYHgt8NHAhEX7Rqc8eoDnT1wqzvZxp2fpuvhBR7JWvKkoTxYDcfbB29yoLHFoNhWE9ZqnTzS2HHDZZ2dQ3",
  "key18": "59FYDCQyqvVQxAVZREfskRH8Fsegtigk62syiMStyqRYftcMFpgEERnD8RwpaF73QUJSKzcz6Ppsf3gSz67oVf7y",
  "key19": "5LP4DcEtpfabMGA6bm1YprwKgnK6RLuCrEoDEdJsPD7dMVDE72pmw4RGFEGj6mRqrX8nnbZB54Xk7Qr1eGu5GUNh",
  "key20": "5rdhiqFmdSyxuBcUiSoxb6h13NquPuY8BLJPjjP3ZLLn8W6RegvyTsc6KYV1NoxwKZJz1aEVdrYS91p1dyG1HAmn",
  "key21": "3wKMenFx9SieDJsLdrFX6EHEw1xBdRSGQi7BzZ4GdhcLwXouLqfsKRg3wUDQ4gkrReeRnLsVm6jzQq2Qor4NYUWh",
  "key22": "bBErWsJjEDNTLG12N3X5pGExuYKCruqgntqgiaag5u8zq6gyYankJBMhfuWLJFxYQhN4v9zVn4ip4XHcNPJvVZN",
  "key23": "jDH6i3Dea2RCERnJNkmDNMnfnweGRSbXpREEALV74cCKtoCDDvHSrHLjjEPx9yD4XGvN6KDbCePu188KBVkm79e",
  "key24": "3d37b22UA1PEWxLHLLd2uzLrdS4aAKCahcVQXTy1zigLrGQsjuaVs4ytUYgkF82atZUQbccXyDUMUDs9AgLE5Ztk",
  "key25": "s4MtYmPJQi5SrrB7H1ym8WXgHLHrb1iXjvy6q5EVQE7Xv7aRuyqKmh7Dcto1RHaBkfFCBate1kQntLiomPEjbbw",
  "key26": "45Fg21aYCwxS6uF2eXgdV51xSnrUkzzNGxZpBYzLcvKRiqgY62LRSfTE78LMLkJ3EC7AmouFMR74od6iSGGXFzKj",
  "key27": "65ivSanXSB5CNXgd5if5SiwGUyQLySvab5Ldz1c6k1PdfDpUkWYa2rvH7BQCk7Y7bjjAnHtizQ2QD2cLVwE3kaSr",
  "key28": "4rqKZa21SMSpCVHiuSdtner4eYbY6kaX7dtwi5rooXkNtSqdF1xXzCTvfXk4Z2doVVCtzrghuwSYKqXM4iXxX2Kf",
  "key29": "4j618RMtVdeZoN4P8d29cAfvwYXoiPFW7vZGjw13EgXGpMG3D3mvWczV3YDtajRz1AAca8AKUBXwQexJZhvxaeF9",
  "key30": "5wqtzZHqDh5Q4y6kFXthRj3meQ4xohtY6TBbTCscdn7DMpYtyE9XhhUTeAfZh4BdZ2hmWuPnhy5omBk9pmhz2AKu",
  "key31": "5X6W2NWXrm6DXBE1D19wv6CZxtfFybTPpVHT7vQuToqAELP39zDMmdpQXeRvfG5ZQkm9wgR8uvGdV597Wzu7N2tG",
  "key32": "ow1gKvrDgfzxB4krqQzi6wAs8XAJF57wHZgntMVmRRT7ka1Epf2PTtJ6GLA5bEucSLpJSjzycH137Xtvej3AWUq",
  "key33": "APpX6UXAYAYUrXe396c6VTjSLUxGuyqj4h1tjzeMmekHJVEqdS6Li5TMuLgXft2Q9vyR54o4MGPB8DjhboLA9XR",
  "key34": "2ecMSSKnm6CeZpEk6u3tAeFLo6kebEHnQY47uqXYvu9F1x8QGYFMF86Y2EW4T36nSAqo3YSkNA6ZCQbfT5yAvVM9",
  "key35": "29MzUvsH7xm4LnhKZKThGSFpo8nkbBtkGEzWNgrk7voGTsZxZe5RapGDKEjtbebb6ePJ8e2Aa2vsekfSih44eXj4",
  "key36": "3iDXBtwCQvBY2VP63zipGz6dJVDu5Y2YbEvJeZYaa3fPsB5YFiEUV4V7vSy6MKZTnQETB4PkE3RqQCveCZgN34J2",
  "key37": "vsp26GaSBLRbwiEephgsGpqu1rXst6bBfGk6JMfqrTB6ebXoDhDfpXu91rJ7vGkNhCpWFwS8F6jm4kQW34orVtp",
  "key38": "5r5RTzrqJnoz6zLWxAiokYgtDwdf2m7dNZYj8GREGYi1HxJdQko3yDzkoH6wYbYRmkAA3NTb1paNbwL5t5wS9LNq",
  "key39": "3SuRHzsEC3yRnYRtrDnxQQRsRA6tDpiM5URrMK8EUpkv5bws2uoqGCJ25Mvpk8ydTKhuLRRhpaLvLC6bGNxoFiyr",
  "key40": "5svTJKwvg2GZPe99ibZGQLAGtDJ8cuCez5vdaundxkt8vvtWFtPtevktV13P4GfxtVf2QXADunzC4Rs6d6C3eVSH",
  "key41": "2f8eSb6t4d4Nh1NLRMWKRG9VurYmbLk8Lto9AbBhiWU1RNaCoMWAggUSCGuMLmNxGL99vvMAtWuVctuvrVNBJfY3",
  "key42": "RAwbabFm9e6mybjyipXKpBhgx7AhhGjishiSnHLDKv6CjgSNjrzsx4fdSgasRwXZMQiQW7tjtnMZTFq8RBhSV8r",
  "key43": "5jYnPhzhahoAPaWSXA61JBeJnYaEN3YrReSjK1s7ziLfYpqaQBHCUbrGiVeTiT7ToBVxDEPqyoqqbFrixqoJgWyV",
  "key44": "SiATDN6CP5cZdUxYJL14WfQSBe3kYL4WUH2dtvXTJPrgonVzSaSHhFNzeUo9vkiKRUXiKAcQSZqYk6N535J3nhg",
  "key45": "4WVDjMV4vMStaTMnQkfX1i7KRa5hCCt2G99DxRBxtL7fNP3r1ivZNJSZ2CuxU5SNtVRC9ozU9RGQ57WUFgzTtuka",
  "key46": "3mZKPiawevfiiQauF7FbBxCwEWmAj4nqqu5xuiSRtytQgJsJUdEdpVxX38vPojNYe7NKZR2WzX87ZU3uF9wrzaeN"
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
