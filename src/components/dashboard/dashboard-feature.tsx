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
    "3fYaEMAZyFzSK4pnN4ma6yHmaCDX9D6TvpVdbbL4t2CKd93bw4UPtfauizGmvLTaQnfoNsVBfTNoNeb7wASSMFHK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33qZQmv55tRbFEmDmrEQimkiLy8V2vHVikKqaXi2QPmRm6GdhY3FmDsTr11NXZudqTftbfr9ES4mRp4LmfEfMVwH",
  "key1": "tpz1hEoHWsQhGrMq46kvZZWcDxvDh3rQj3YG49tBHpQAqzeB1HbNQTj7yCwr1SUvq7qPH7WEcUSbRZW6mhW5xwz",
  "key2": "4tQS5g1uNZdMximhndFQsjsytnn9QvpdWG9XQHxLUC9oKM9uMpmE2zBKMyu6aADAXCjbbwJr4ALvXe2MhihJZQNz",
  "key3": "2BfYG6kGTF3jP7xjsZauReocpamNZRPuAqE6uzmToGpoxcJi8cH74gnM9SspSYHUmdoe9ggR7Bvhr4hirNyPxc7e",
  "key4": "2ndfxXrWNBf6n7HnVSkxynrwihtagM176Hv6iiU87TiNi2g23G7c8ZMtW33FWX7UK1m6dNZMzxwbgQSVvUP8D4S2",
  "key5": "2PasFEQBNuLma48AFbwQespsw6TiFFioPziDX2ioVUSkRgGCyr2YUcPxkMBHa1j9U94hNxZXCfgw5roVkF3Y5Hqh",
  "key6": "2GP59mnCCasB7bkbTDWJ5v6YaYDD2pnCSm9LG1EtGE66ZW3dvi3pD51rhPVwdR51skVEUFmFqbwEwLryhaSFYWab",
  "key7": "62B9ZBmmFLEVGbGjCVkn3sjfA55uQLqLKfJtUsh5xp4LFfqJtBC9q6wN1p9nSbJiwF7d9tBNaoj3A931ViB73oDr",
  "key8": "4UqtxC5evqg9f7AJeaRwLEUKuKoMPuXFy7F4rYuRXVPfaW2xsfhd69jWo3UVh7pYiwzcyAm6KjA1egxkcj1BVJgP",
  "key9": "fZRn5aZQ3HhUrjKn4AY8BeTjmTob48Zyrerbv4k4Kxo74wGa8TNgWXhTJhU2iJwEnjDVNiTd39m4hyeHfTBLKJu",
  "key10": "3sK6TJnKVc3zHopKbzEKhdCqhGYtdzM5ZbMWGKa3fxcGJUVG3jMXQ8ZMN2BnDoBnuzCYKBaD5hRjMhDADppoXRbr",
  "key11": "WKcEM19mWPiBd83Ufe9fFwMPKUzs4vZBNQ7YVbh8hE77wKZSoHgERDwmAgx2PP3FV79Xy7gzUinoCy7GvvhbtDK",
  "key12": "3fyfyRDCtN5SrkxS2dCbMnEFChnwZrtva2BAcrHypcGFQkDT6iZtzXnrinpVwSpTHCELTRS62Tgs8NDYaTZaLYtk",
  "key13": "4NoPN6VN53whvsmpyULubNQ88U1RnuFeV1x9jab2wMFiQgvduKj3j8sKLNopTSmJ7LRGkf3qSSYr3gQ4Wxwfes8J",
  "key14": "5xxt69DfkBDcg9TxZQuiECspfkyMoynBwWcFcTJ7T8ZgtZqcvp6oYF3Yh1y5hPbDrjuKyc7UELxYjbShuCi5dG4w",
  "key15": "cSssJTwSVhAtyduMScgzmQifcxiyg2WYtFMMF38Beqm2t3EiHG4wBnagqN4gjrGDzTTDzTws1dADjAEff9F7rEX",
  "key16": "8Gfo8k6YoWydxr3odmqi912NiK9Fz1L7SH1d2WkaJEVxHroFC95iXUJSuv4ARs8sGxDtiqjZJKbcC8W31Gb6LJe",
  "key17": "7XtbEyZDffJibwboEwBT88pYNr27hmGY7L7pJkPRix7F9AggXGwL5dfHEMqtvGmLyf9fiGyiDdWvpRTmT2KkTS9",
  "key18": "2xUVL519XNL2sFs9WAwAb4miA4A6LB8ezMidk1jZDKuvzKrbHiRWkZAMTTSk181BSJW2yTyC4787nSyWDT3LT7LU",
  "key19": "2gvqDYHz1AvqteeQzWhcjcUEkKd6pTaB6qUwcoK1kawV9XdwrWbxFFiVxxCPw7pBxAh54qeCT1F2D2cLGbjKFzFE",
  "key20": "5dz2ifMYoBWsFaFDkwnoJQcnumF2JV2V8EJCnPxYJMPdWdxWeusGPVKXyGrnX1KjToVtD1NC7rp9g888hD4HiRtN",
  "key21": "4atAafXGhPzKeDR8MUoThGhbyTh23cB8nuvZ2qNwyZF5zns4kjdftymfiwEY58xTG38uhGnXmpDKYTUt8VxmM3YH",
  "key22": "44eDKCnYyy4zc3oxDAZEh13kSE1GRMY1TDRADiicTFmAvJbspqfJdR7rChDrBmkAqgxe5q35LWnwgFv9m6efbEns",
  "key23": "2aTDGzRfqoScVPEuMv6voYzESX6XZh5hxYJqZGcTAwHiR22qqehRK4JSjfAtD131xjgFpjogQXMMSnn31oVSLmGB",
  "key24": "5ZKfb7adybcBJNaqkYU25mXEsEyZhpz5a8etypwfxUM4XBscQHf4sp6mkBofJfWV2Di5pLuQByAnH9pBonEDBYTc",
  "key25": "3UzQSojvxeozxfmNX2dzcwnTWMyiHByjee1cBicAKac7sGPihsCtUq2qVevSLX1NzjrQPVoTNcx7zVhXQsTXbzZg",
  "key26": "7jz2avbruWvLsxgM2cNReGgRz73RFf9HDaEX1vefrjk5iKE2qLfXw1wqdqmdN8MfyiPzpuiJZ4LHkYSmBGueN1m",
  "key27": "5LhXBaPBXf6gGdisEvgjanymjxPcnoFjojRWDuxa4eGb4JLtpArzmw2w3ALBMfgkkoLNYvUM4FEXxN1xVyve33g5",
  "key28": "4aPBf3gbEQCKaqMNj3hAbP6GpbVdFv5WmhECpLHckPWLSv1auSjo9eAZpFeEzmTqZ8CPHjhhpJNA9JQPSGf1jHai",
  "key29": "4X8xsT8JFYfZ2aUscTBnaEYyBvXqqMYE1vMxQMR6iEMWeB2uWh9BjjAQX75auaAbAteuaYMBFzdKELQTn3Uv28LE",
  "key30": "55V6geXh8dUvx25qXjmtnD9g8KVK3o8Jt84obwNW4t7uJnaQvVDBULbSFggM1DmsnNqAR5K78PBNY99giHYxYVML",
  "key31": "4uLg2SsQsnJnHtLe5ykNt8qezNPsPAACzVfoW2skqcxg9R8LH8hLG89eqhuyGc4Yp9Zw1VuYs7KyohDVvneBsrxG",
  "key32": "2oR7XyWFMB156CkDpqNrFB35VKaH8CXXGeWyn2rt71EXjzisKGC676XR7FBc6jMSt8YzbFUs9fAKUa9JoWa1Dwph",
  "key33": "3jSfgKKpJraypnGjNHgDt81ggvD7G2sTqumcGFxEyHZiC1R1QHD5hEFWd7EKNXhaVu3TWTHN2k5xFMtkNrMPGE3F",
  "key34": "5FFgQpD8TWW3oe4JR6aUAcsUuBEE9JrcBs4gYSE9ey219oyDkdo6qu4PCGsX2o3SrmajcfYMYUPjmdgChwPDEWNM",
  "key35": "3jzNRVt5CyT7gQ7wZhGunKGffLk3u4GoVWtnd6kGJzJyLc5gcNMoLGstUn2XJXsPPYjPtuC8dUC8bRJtafvi3HJm",
  "key36": "44TJuKzMSeqaxr2X8CESPcpzeUkZhLDeiFJfQNegt7g5RWeqhap2zcSvM6WWSsoA13fQdKzdanCFytNiXfCSJkwE",
  "key37": "aBaW5JSLUsT5UufXVaeXBav3Nxn1rvWNqtCmAgJxbYcrXjXYiDFDy1BiW1UpLEBzqsP3WQVqN5t1QkMZPPi9pDZ",
  "key38": "2XWUXwL8gSFdCpkRozdPsVKrzyS75CWqE3ggHEGH9ayJRaFBcLfp8BYf42TRz3aTVC6TcwbhCA2oivbfnSAExrmQ",
  "key39": "4GUtnanreE2dQy7DReTMXdKWoxSSHPVQS5KRrWjyNyFzypVgn6AK4fz3gCRfF2WJQx9rK7C8SY22aRhkWA3cQ8mU"
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
