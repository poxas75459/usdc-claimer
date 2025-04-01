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
    "5S8eyCqptfH9jggNqG8Hffw5TunDcRPBqwFqPQhLwSSPwtxuzoHKMjzt4RUtBufzoL9Ra3xQqye7RME91i31bExk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yXFo4NMgJvTCfcDBf956j3oMd7JQR2ES98YFqSJSLw4PdzUWAW8RiiWy7A2dQqrhwp2eUAyamJZz3AMq56fZJye",
  "key1": "5TZQqDeeDRgqmBneYCMY7sDaA2UR1gcWzuR4Epf22ZPpffQjTiHb4tbz9XBt4p8hGeZqC9Uz8UbYJJcRDgVRq7BM",
  "key2": "3Y4vDtXJenAbDtpudfZKMeMpNwtzypm69KBE5coUWmzHeKf2yPGGYk62HnLvWZCSrWLwgcK5jtd45diFF1vYqHHu",
  "key3": "3BKZQx6nCDg28ytFvbXnoCpChAQVNHg8GwhAWiHdcahcN8P6iaDUrko1cgQtzpnTyE6X1RZwQCWJd6W2bzbShYcw",
  "key4": "3hk3efjf5FZeR29BfpvBfF6v2P2pxKmPAdeBGenS5CC6N7St5exsvuptFotGtyD1V1MxTLdFVLjnWiVHBNvTj7UK",
  "key5": "DnUET1GBVekBEgaXqECGPoKAwRp8Ty5YRpW96pdEAiD1PzWaRjT8fuzsC7UF7LmizDwiLvP4Lu5Qo8vXVHD8ry7",
  "key6": "2KFGyzYTwvKE2EdPxkZAg3YYHzZpNC5Q2CEtUgGfn3atXCxgaDs5dEsPq3WjZ7uoTKDR7nz5DEHYqi3gJHwc1dJM",
  "key7": "3fG22xb92Yby5u35iW7vXEUV5SeJtBc3SXgAfNnsXkpqyJMcNcDyTHD1KGBF3KSCwcAosxkc9stkik6QR1P5caH7",
  "key8": "63GoFDEfA8KwMpLUkpXJmkkSgmVTU6KRpaDLhnGn39fjHB6DUxvNsEqyzX7jxoFzZBfiZZcwE23QnnP7gmgWGUAn",
  "key9": "4QsPRd465rgi5Xf1DC3HNTcnB35LtqLL5YAkAcA4dBVgWwKp8Za8JZ5ZqvyGMEh3XXUEbzDzfJi5SgKR7n1jhQu4",
  "key10": "2eNP1n9rRn9qjPrWzB7xtNmY8RBaQRJbnzFJeGR7rSvGo42ogzkZBw1TnEXPTbYwEabuykSdcwYg76YzbSjEsajy",
  "key11": "Rxye9KCTutcny8tM914gajaANTPtykaT1cfXmUHLyTdrt6ooCycgusLKgY7B9cN9M6oSvoNuHuwUcPhtGkvkoKn",
  "key12": "5HH8ebgM7ZyJ3gRVbFH34Uz84xHsTRketD2EWZG7cTcMos2t1QPS3TsSKJgqbVeyt55ZhkC9Yedh5EcwedVFtZsz",
  "key13": "5XvUHtW7heAue5LZ6m3yhSggNUqUJA1VwuRXp8fqJNeBwVFuA3hTq4DAADX1xwUrG5vU7Azc337DtPUNcK2j7HgX",
  "key14": "GK6HRc3bTAZBZ2f9cUe75LNkkgkacTSg6bbmhGh42cL7fY2949XmSrGyRHaxH454VYCoLzUGiaX5mg1C1yKjKnF",
  "key15": "43hLvW5F2ahZ3g4fufhgGdrtF68P5RUbwyxMy9wdKJFWYytyaXjTy7snh2XoaRHH8UP4PAQiGjoVrr8o7kF9jvwf",
  "key16": "39hdkiNymiGy4G3RQWYHzBwNyA5Z9ibv8QQPrhu8nnXTKRJBktkQyLPSyq7FZ8Ks5zUCQDxmtkSJMvGDUbotZaLX",
  "key17": "5GzwFkKhhALoLxmNhSStLYaTpFhAX8kw5SEAjt8crbjjzvyzNuebuXXQJ3qTVATM5BRDnKsLan1wGhiZ9dSZHyBP",
  "key18": "5XALmuhm84sbRmnxpMSab3DjCincwg5T9KHToJKjbRUSjJSJwPM4omwt3Zx3BNsL5aXydm8fnmj9xxVijcqLh653",
  "key19": "4Qx4gApi9PfRFTP6i51ANzRuUq7Mbzosn747oFsXcS9bhBHgvqTogMsJXeJSCYJJw9KQJwpYJP2MngodMXV8xCdW",
  "key20": "4DqmBigAqVcAkDLEjTEZqLx7nT1RCMRpGiZnkbG27WWowvAYXPsnYJPKat4FaTRgT1p5vTKf4TXGvsZu6JFhEmkd",
  "key21": "FVXDcNKLEgQZRouYxV6VMTfGyJzhFqoS1MdqmHhUTE6vD1w73fhC7dN89PiN2XzDHTdM7cUNGNsu7xWhXos4tne",
  "key22": "edLBtm9k4BL4UdCkduzhZ5r5mXG7j4MAkBojf72xN1iwdLf5udAKbUcZkuxUEeJnueeNTWXau3cmU5YmzThvoEL",
  "key23": "DLbAMaNoyRbThYsQ26bbV4thxqkAbCmYEvGfK5cUiv4ss7zPgLFWBqZshks135uydcP8zc23MWDQma3oQxENB4L",
  "key24": "3RgQNTBxZm2vaDWEBYcDyh97zcLAz43D7KELNLFsKRwWmXFDgw9dRNQ6tVskzPoj22G7j5hU1GVCfgQC4EDU31Jt",
  "key25": "2oAQPSCDFKULqEuSsFkqEwh3uYT67isTEYvwaNL8VTigULhpiUJkTLm4HM4H7PRpAgQ1tCKJKRANLNCKMbP2CNsA",
  "key26": "3AGTBesKvpzq7LYnWUaZY4881hDXmHmhzvLRCbpdpyDZiEbFKkd5hJyhwWEaAhBscoUBKpe5Q5vhvFQoHA88HMeF",
  "key27": "2dPK5L5e6a67GjzfLgzMGzbx8xr7qptisYiCJqcc3Cbkc1j3fTtkq3H79vNhTAzQePkBzriqUZRZ3J5GNWH7n4G9",
  "key28": "2984Bd2PoE9TJcyzXnpuySHnFodoK2SuzzS9roFvGNYWspxBy2uGvDa2kDVoXH9T1EnFBLYNwAvggbYHKgyUcFjg",
  "key29": "26WVB38382ZftNMBFz1o8M1tN69xner36Ndoa5XbSKWrMTRdfMX3zMsViJ26u5XoLyZy1nPAezTp61wxffAut1iW",
  "key30": "5QSunvoPvAc7fAZGQLpLb8XnYAKbxUvjmEEThMEEAz4KQd8xfYgkwsHGgQoWoVard94J9ooMjaZ6EFGnNnkMzK9m",
  "key31": "2sFqvaqrguR1updDyhkaY5PhKReUKnpXfjY2k6YKwMF541Rsd2coMo3Jt6JjpRQfoSnKwHCTJRE65mSyHvbx1kQj",
  "key32": "22pApWNLnqRah4KUSXudVAPjLVaLF37RpbWtED2LiLsGiWFTEdXAaWA55EF61WrNCmpqg1fy8o2rj5M5SBBySRev",
  "key33": "2QFpGfUBFWeGxmr7DqfG2MFK1DFtr3xQgWy645GGdxN2ZsP1S93XknCWDt9qEKRE4WKxPGPTgnpdwhtTrDKBTvvo",
  "key34": "3fcdNXc87LpW2Z5QK43FsaENUroCYgDbz6mH12HuCFKqihVAXywXkycW1d4qWnkAkYJrDs1FY7tGB45SLzTJnmEE",
  "key35": "d6DkxR5E8FBgJDFna2Xmb9Po6fPPJ3EpLMY9acTL7SzsmbBNMVeu5tvxT3tMggRfBGghEeETiqfUNedyd68RYK1",
  "key36": "23sEEpqugsex1JPh1aTFVf1nDhY44N8x8UUR2EBdpJe88oeeAWWTZ44SMJ3FUZB5rZuGX6gVjzHSPfecaCh6nK72",
  "key37": "CdTNMxv2S7W7Zk8nSvmGAE3rt3GiNinSsvjrHrs6Ri8qbpYZjfqCKs4we4qXkxi3rgEZE5sbUhV1LqHf55kD4uT",
  "key38": "5H425Wfpp3ddb9aXTKhq2sgQ9qYaZBoY7pzixdBUXkXMbgis2vKK73C2FsUXB2A7LWioxqpwmaF4y9NbWAa1HcME",
  "key39": "3Udj1eLje9313mumjETr9re28dK8DDXgqi99trGJEsthE6P6iSKhvXkauKt6Z5NzSWdx612NXWJi2c2BX1NhHHrM",
  "key40": "3RADfrdxzPBNzcykPWtYFY4xBZw1cyujgTGnmDVGkj4he6T92wKL6nVytuHY9qdamCDizE1BBhsEzs7Hgbme2HdM",
  "key41": "3oFUWeQxEC3qHhKYnVywn75p6mnwqLN4EGvQq7iuooSR6ayEMDmMuLZ1avLjv9dE98gzHjGVDS5cFbkYZp2DaDZ3"
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
