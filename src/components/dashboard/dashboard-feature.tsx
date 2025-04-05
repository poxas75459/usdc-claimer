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
    "4t96oDMXpk2kFc5DEjhbFYhpQHd3zYBqHnBpig8fumNkj7fgfxutLi8ipZMZzULnvTf83rwaZXybxKf5dgZ9kP1Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36SRuiJD9nT6vAoPTVqeSfQMzw8Pdwa8iqyw4BZ1jzSinN7wdST71x83J6ZjThEBgdJiLRSAgU5AKXqihS7VpLCA",
  "key1": "g9QFhS7jjMmEG4gX87g7xHdjWrMV5CZuA8eynrkRiT1VwuGcaqXPajsTLUNbJjoSWQ3V6ZDnmp91iqb3X2z7xSi",
  "key2": "3kFjMV5wpQqoqizjpedW7Wjk4WKY5GhuXxB2Cm6KmavwmkpoyDzSb8NhGR7Xf4XYzPgnS151U3bneEF5527w17AR",
  "key3": "5EiPLsKRyDBJNxR1YNqAXbsAkCm2DbuZb61d2rtXCPXehiEqfKqZFoFPrSaTjKVAVRz9YK1rpEpcWowM3h9nEQ5W",
  "key4": "4iuRxVqkTC4C6D4HHEAtAoTogorz6xpijMEnF43jUCUNGfJdWdkhdYgJomoJQiXuPGavM4gxbe4693VvtRcHY1Zw",
  "key5": "34ThtkhtYsyodNgU7pAxV2QGPSAFL7n8ZuPsYUFNjhvBxAUhUaW9w6teBXP9xyKYHv4sLZvFXo2a435pgMuw2QEM",
  "key6": "4sbQZ7yAaDLnVAWTeNEyp5N1esvRTNx8JjADUiHtWZWHuobX6xWk3CvnQoUmXse7d5yQN25qUAGPdXyKPxyF8iBC",
  "key7": "4XH16i2ThcBQp9K9xH9DGdBTXmCmWXiYFUbSCBSr1fh1CYFUDFSPK7tBKXWkiXxNHMckEpZxreu6TsVY3dAfNwpw",
  "key8": "3PvDhhKwN9dSfZwQEComxKkGdNK9NntJXLLJ3bus6ATmFZFsaPoUEEKMoiPgBCC1qTKzrn3GVZxZcFZZiEqduTAJ",
  "key9": "Dw4j9VciXdtYMKVJHkFLeDsZbWXGavRMo6H7zSXgoipVdDN5D6NMioGeHdGSicxbAS3zfPNvRvJSdEUurAAKVUp",
  "key10": "2gdNFsrrxLtBqueioM79chxBbS97svwpBkUAxkEJmAzzhkm1Bv9eK4LdYKAqB7qvoDDu4LHxMNwytsVRgSC2nabH",
  "key11": "JT1MPKG8VmHLRH6K1tbV9B8MM5rPSYTXy5T7Pvajmuukp9GW9nECGVffBT39s57KNMwhWEUi5L65LomR7Tj85qZ",
  "key12": "2Dcosdrg9pyoxoVLGmz8prSPnPSff9F9HjKVDURQszT2ngmbBTQRQEmJeK4rik47C8K5BxaiZncbzQFfH2u7H9bD",
  "key13": "4vN6SQ7o9GYdkbziCfxb8DEPxqyD6DVaLk7ddPdgE3VYFrpPBcZ4FBfvCvEPiJBsb6iHPQC7X1NdYNVqGSAP3yDH",
  "key14": "5QE5zEKHAno4fxXnSCdft61WfiXRVfcvkNdpMhsp9mq8pMkXcYRi8yxLPYhKjow2EPwYM9yqLjCjw5t9ETCQTAn1",
  "key15": "2JMER7xrZfcrjfm1NZsZw69zeTmQPfUinjjSpaEeUySHKiSefTmQMxECfs5mGRpbSUv3BQFaCexgzSzzysHSzdAB",
  "key16": "4q58frPjZK132mJhbc5dLK7q5SgtLr3bqFPL1XGy1G47T2Gea7VNCMu7ziZeDpY8EqHpyBqWyW6uwJ4gAFYD89dq",
  "key17": "4E9WRqutcy7m5AikuVUixU5H2s4UJSxZiy19z5igFTZTUhREjpu8Jkz7FoxQsr16oDH9FPPB1BiYGuYL9PBuyWhU",
  "key18": "627TjNGM4a1cJHrAjoiRBmrD2s2AtbVjUUsyb4r7rwXyi2uASaPVWvNkUxgTawATpu1nn2w6NA1oBmpEnzyzmKv3",
  "key19": "DaBbDzeEf9eafEtfEQefYgfHDbgVu3zx86JzKLcdigeFxUDmUhid6F4HwoBqunzZQmXNpT5QWwjCbv2mNqbNHAj",
  "key20": "4TebQdZcSbND9uknXz3jBErqnxhKqLEptia8jQ8UJVJiv3NcxsUoicxi8A8Wew1SpjJinRAGKQSsBbZ3KBzoy4Km",
  "key21": "3KHmi7TKF8DZjX6fxiXNBcLN4QgYcnSwRFDeeiqG4omwYiLz8gzrHdFvideG9gdJWP6X6t28rwpeETQ2cGdcFNvJ",
  "key22": "3ZNAk4PEoZxpzk42cCTZ3yk4fub1TYAaWsAePWX8FRzwzbb2mXfEQBDHRDKMb9d18b4z3FRyjgmjcVrGSs3CBNKf",
  "key23": "FP8zpHTaUvPW6nAcc495HmfEVvNdicZa2hoR7GW118KzxiPFxahZxB9g8rjzTwYtVpDqWR4bxqugSx63LCHs23Z",
  "key24": "5DtGFFfyp81KkuNAwXtwSwZ8HkxwsC1sxUThDvDuKFf6evH3vyprRffsrmmEBdS2XbHAw7FuvCek67CszkuQEz37",
  "key25": "4JEqFQo451KKvR8fcKxaTGJHDVRJZ7nro4Nssn4jmbWLLXa29aRk4e1vQa5LCTUP1HK1zq6ELGyuerZYxfSfzLns",
  "key26": "4PNV5r4UTtanMh1TjDH4EDEzKY7XP4kjYcoh9CRrVxKtd5rf3fYFnRkJbwhkmEqkCTwYvzfhnE3urYnQir4tfecx",
  "key27": "5Mx4CvbU9wGz9N7QyNtaS95dDP5APDjHVGDFg3utH7xJwH9Ta1wZtTqYonD4DwmXLxpRQ9ZAjsLRXsQyoBXB56WW",
  "key28": "VaHKyssC4R5kabtvjS38r5tzAm3wmsH5dYvGmnahdqgdVynZ5myEecj4NeohFqgQ9wyj9LxmbbCxZfEsVJX6zGg",
  "key29": "2bn13fbbPLPCR7tEw1zqEimofELSQrHKv28Y7nxLzh8NEsKC4aKFyY8nFVWVfU58yNojgeY5erma3btXwZYwaLxW",
  "key30": "oFcJ3jz3Yw3cgNPkYFDSzk6utSxSCJv2NAKyTaZWduPw7RDb2jprvvS9Eab4g1Eghz8zPVc5ShTyQynUrazipew",
  "key31": "5dnYi4xYs9PEChBsW6NRwJSyyxdHdmxj7i5Zpn4FzNXCJM1GEfXNFwQuvWanCdn3kk1VJEkeXQKzuKdaEGBC3sWT",
  "key32": "W4pdKuc8ydYWtWctbSdRHh5VJZ8AuQuCDxuZRz7nycQiby6a8jHVoTFJxR62w61yHTXBsaS3pVBT4S3SH7uqeW3",
  "key33": "3DydAvJ7weuVcPcsXcqvJuScVDmoCjkPCANSafiMx6tbK7A7vo9z8fm1tCzSMcLva3vuDshGSP1qKsQTkjF8GnqF",
  "key34": "4Dr4F9GjZgafvwXzWKwUaaBb7HLjA39t91KX79mrbU7qiHULiTJiK8Gt16X5xZixXLqv2J3hpHkRfFxgyVB9JuqX",
  "key35": "2e3eqYgqBry5Lc8ZFw1CV3hGrz1s6XE2yV3KHsu1TsJ6UQt41E9ftQRvyXRbnnptJbSKW23GWjRPRLW5pM1JfgtW"
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
