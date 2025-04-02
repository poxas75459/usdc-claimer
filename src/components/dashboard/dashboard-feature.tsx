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
    "5n7XVg6xSDFaunfY6F43YxKqZ6nUnFbaL9B916UiaEvQ7enidmPsepznoiXQM4qyHbf2dhaDnKEexP6RY3vqouTf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MHx6FHkW53rqRxQaDHgRc7oqJMua5JoLyAviDhQGXX7krTXUhoJJPp3Xx4bNyNrKcAmtjBM8Dvb18yj2SwqUUXE",
  "key1": "rsiSn5ngHLSSporrqwhx79pf8vnSBx1f8ih7yTeQ9HRtvZijacTsHfmqDXS5mMdU3qsWaztGJQpqkGFv1FGTG3w",
  "key2": "4uSDejtoMGPfSP7KC8WLBw91YTcgVsuB4xQ4f9Rb468TYobUbdD6CHBzevAu7JfwgNu2vmHuNLoobGpv3ZdhnJ5y",
  "key3": "2KKk2B43ribVBU7Z86NK39KYrHK22Rnx2QxcBS4PhwWPaP5hcdtroV4thQq2C9uSEepGLy3u3L7GQVoykUKzjr4P",
  "key4": "4H3gs1kAEBfUHAo3dXhEgdoVWijFsM33Fuy6QfEJ9UdCLcLaghGQm5p1yzxMJfveGibZFMaLqzdyP4iMJp3ZdJ1d",
  "key5": "353zMaFeVcpXaWxQyUtyKdsCz5gN1yWo9kbNkJKdMzYCYirJtMsZhTLK6ocizCrjDkcN4yosDdt55DigsyMFVLYt",
  "key6": "5yyo1XVdQmUJPpc5gciG2iUKmGo3Ec6RgcNRazF93ut8n9Ce6PvQ4fcLo6moquNXZ4PuQtRsUfUSw6aXZXMrSGQ7",
  "key7": "2QovKrbuJAx6VThS4bKN7pFSQJq2FGj79GEbk7uoDWTurFJauzwVLih3iC4j3KDoSpjU6jspPi5DKpyeYs2cNuQQ",
  "key8": "5rN6tkVJAercHMNZvxxeETGuSnKgKqwBp3E4qorcefkzwydLFzayFPUR9fSZYoSEQUwGDdo1noKinFcqRRQsK9yq",
  "key9": "4C4CLiE8XCpUmRjdRyFkGCsiUxY9KdWdMSGE78vvceahNgyFUV5FayevTQUeUJpCJxXBpdpUPQ7fz2PEQkLrWep4",
  "key10": "49RXDoJDSvhN1CLxmMZAmmVF16WWb7mA4cxsWa5d2N8aSMbd7zt16yVumZNqhR5oXx4yiRiuJGBApYWWgHBa9uC3",
  "key11": "2suSjTrqdyvtLAkDCjxUXcUq3pNRAaBQdPseFvUr8fXmmfsoi782DgX2r4vAqwe3zGCNWUdh3iaJXVA9PXYQdw14",
  "key12": "4s4aCGnydh3fXbmpNQ6Y6if5VVgiZgZJGqd7rEqhkrbDjuRKjMp6Tj87FwCTQZQRVaaCJzLTaph6GDtcPwZefNDT",
  "key13": "eWgUNTNBrAWxY6iGuJPqBCFw62mNK6AkBM9iBmjkoc9DWAu9PY8Qc238yFF3C1uH4Ct5Gudt9V7KXgq5kWq3NC2",
  "key14": "2rchBLnhYPSdbfBLxBdEunogUrzB91j1nvnWTa4ECxbZta8ucybgtnQ8nwsgARUtNz1X7Kz7Zw9kKn74JVgzpBKE",
  "key15": "1rVk55gNyx4wNb6ZG3iRboazHk8VB2usiKsg7xB6KVixmJGzm7JYbgw9QfVAyQuP8BrKUfSZLcp6TxLHhmGEmLn",
  "key16": "4gL9afuYWY2caB3JGApVHQmr1zZMhNKjV8uT3PX2aRkEcrvFWtRj7qk9tFpn6rMs6prXvDo4ki6WFQjXZx5AhpBf",
  "key17": "gmeunnSQA4Voniu55vbooRpLLUgiNfk7YuEVGUXZjekJD3MwUMnmpn82ziVdCcL7svvTLQz8M5CZPayeKjamo4S",
  "key18": "5vGUamj1RYhV3R7An89L8YBFqZ71sdeHKsWf7CXC653TeHPYHoiPDCbPBdJnNp3hs5TCsNJgHQnCiJLq2Dq96aSh",
  "key19": "3QSS1rapry96LyuSdqY1zp168PgmvYrJt9s5RJRG8V4FxZnwTQEQwKfSxHFuFGjAPxRmkdQ28BqVRBNHGu82k3X1",
  "key20": "4qYFkqdodVcjWBS8YMfZya4i2Tk7w58axKUSag1iH9SjdK4T64R3cqP2beuWDMXsnHCCAdToPpSsee2mrRWAPiSb",
  "key21": "4vGHBMAP27xwK1meELAVvfbDK7muoNUDjPropg2goD8GkSoe17Hk15gzqRQ8HHfwr3ntUnnC2q69f6pdbGE7p3eu",
  "key22": "P3Q6rYDCWDGVGhbsvCtwCKydQx98qLELw7ZCyAnZgKUYCoMiWbJk2YVMrTiFHDciCMfFtxDH8dFUzudRWYqjcAG",
  "key23": "ZvTEXmJg6fTagS5NjPnrHu65HnPNVjR8whQxTB9c9Aan3uu8xs7EGvLv5HXNiWzD7n26LfM7s9hcWbDVyJ7ycYH",
  "key24": "3iFJ5rxt1sw6Y7qa4Z6dgXrHCu1ke8KLcPEHYJERqebMy4BTDwsJrGo7chfVke1iVHsF9rhm842S5XLYxNreetmy",
  "key25": "2qcQ9aGkLEdAVrAXn1MkWkGfh7VozWB82DzH4wUDy44c3yQ5qfhgoTU83m2ZcuNk3J7iyP7xbwmrTpxmxKMPV6Za",
  "key26": "3RBn9iozVtvW97dakvVrwyDNtot9N6CaoxUC7Ycteu37cLJhLD4L3E3MHvPFTWJW3MexwiF3M8SqZXDayc6YDkoS",
  "key27": "4VNo2BJtzDSQZ5qC6SQtaAnraNUpUVpC6Ko1cvqZtc2wmpKgAA5cfcqEBBYv5jNXyELnyd1gwjQVohwENDBgAbU8",
  "key28": "g7Tft5ucUjXvPeWUgbcVEJBK9KGgeNGizhRtigiPtWY2BTDFryicv8DRvp1ArmJeGKE51JBPjmoh9dvtnWHtmRg",
  "key29": "44FrpXNf7QoqFpr5PAzf1YeeqExNtbXx2RL9fZSL9TfYPKXoRb2P7bxB613FpWiqkXR8iLgYdFME5jgUMxrgVNTG",
  "key30": "4CbbJWyVhbrfYDQ7nk8gnhfLputyw5oSLp1WHtoS2EAKjfsmMuBegdqRgT6uVFUxM1JrBX8W4zwYnk46T6ZwVaFA",
  "key31": "5NwTZowfVvQR6aH9xMRiEQ8xCdC8XKGo5uGVHrUKPKcjaLSjE3FFb84e2LXTTDf57jRfMaPbJWbSxdem4Mo1xKkj",
  "key32": "5y5nL6TheuEjBism8WuZHKgFTMRCYkqo5uGxWuwKoF1ywEczmSCyxnk2CQsumYSRqbRMuG3Nf3aRbjNe9pJMjTuf",
  "key33": "W7os8CEg8qk4gZmiEYiR9YPAg782PEwm5mHna9ASuQFp4xZH92qRQhZuJjGMRFHsJTXysxBSHYbKM9o59y58ipX",
  "key34": "5CqkbfWZ3r67dPkF7y29A4snUQJRKfoG5pgv5EaFdFjpaM25Cjs7HigSxDPU2y7WYEQqsMvpCqSiJndqQEi6GyC6",
  "key35": "4S1pL8YzrBMbvxSsmxQYUK2WYg6zaBPdn2DgvMUt71xKqEiUttCinj8g6B4bC7mtML2pV82G5DiV4UPKJKfCWEA4",
  "key36": "SodaRxtheXPyyqbT7rRLLy3YKDcWHun4FCDspZpyHvekMx2tSbCoFM61MgAPJzshgCwkw54G4yhypwyuBcg2qzA",
  "key37": "4fLWFTHWvf1u1rwXtrqTA64D7FpAGmPaCcirtRiBAfbB7p9jWBvWetWsniaCvuEpxp9j3EJUv7V1efRHsEhyhDCk",
  "key38": "4AUiSbaezPfkUYRoj2AW4HDLHP4sbFcyUUV1xDRua17LYr6uc9kE7B9h8DTU16xU6XwBsVQtEezS9QJJVmhEkgeP",
  "key39": "5LRtKcHuaCTMsRutFDLk7pSwbsFxX5fwvL5hPyfWuj9xtPCzfCTQeVmg2AqEZgaUEqpaZXfNAXDQACjFq8Ph7yDP",
  "key40": "2rduv6yNXu1HdJ6e1mSCGSkTavaUtos5Zvn8iiAGeJBkp3awGM3Kt7vVJo1dMc3GcQtWbLVoMhgUEnXrL3z25ULg",
  "key41": "4fvkATJBbX8WtD7ML6xZUtJFf1qjTNsELXfHrqQqz6RYU5HecHANw8Mcciby2fpAUQtd9KLHy5a4GGRJH9VWmYgZ"
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
