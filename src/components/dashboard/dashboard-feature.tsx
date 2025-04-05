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
    "ukuxRvR2PtGLVC5CWYL7bdrz462NmJrzf8nAAjcBfNs8WVywMZXNojfyxuEuV6xxumPKjyNia3HKQF1J1MVRNfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4u6mkUwu6abJgdEb78bJVLjCqB4LFCKPSi7u67ALpzuvCJWEjs8LzFJmY6nttmwTzpMNGoYsXKCfwJRjQZFtvJ1G",
  "key1": "4UvaVWSiZ6UHyqSLj6gxnppH5mrrQ6W6uonXRX4CFttuFZTEZVqZz5xLHxyoyuCq9W6g2N3QbEqrZTGPoi36ffwS",
  "key2": "37Wf7SydGst9SPJn2QBWCK9gB3BGtmRX1t5qavjMkPBYQocaQrHmBQBFVMUMfvC4ZNJF4B6QoDV6oyVkW5hcCcXo",
  "key3": "2amVmTiT5wRyq5TSRtyPhF6x4suaxv3js9dYw9cbGEyqKKmVkLAJkW1zrgi6b3bJ83AV6HZKxomm1SwQ2v26n96r",
  "key4": "4CqDJZuoHyYbUdr4QpMmwKdJhLnevyhD7Si91Us5LkWnxjzq52qr5Rq3h6fDwvs87gUCXLeitdeTHnazLG73tT5y",
  "key5": "2S4y9sGiysECXj5PYh5tXXAAhAAgUaAnGSa3x7Hr2czkuQ7GM8rrckwK9QDYdgzKm6Dr6sn3Y1DFaMBM9wmw448e",
  "key6": "5Eezge7QPCYYB9n1vvSuZjeixDZEXJgnVCAuBeZ1gguYz7tXCmXPU2RJiziLaQH9dSygZPk4J4S5mW3VGpaHPkUf",
  "key7": "2jaf2tEHNHSL2Z99Zgh5WFw8TwEnNj9vzRFckdEbSSCFMFnP9kZb3wv9GKR1Y7wEdQTT3G4Dtptifs9XS9AXmKmC",
  "key8": "5TW31hsVhMJE57B5ag8Khm5pAoAC1QkrrHD6SzXRrvMhY8YgGKoq6PyPf8nGkjfdS7qPhChbGzsQUJdfvBvooeV5",
  "key9": "aDdosuYkFU6SRPBExxs6txwrzATxLvKbiByGs9ui5qsu9dww54smPPctzpK5L3w2qUM5BWanyDLg9in2psNTKA5",
  "key10": "3ShgxNeoZZ2RL8A1srwPUv1uiwLG6riXgXeAWdSoz3rwUsKa3sg1HhtEguBt4qNc2bkhSJDSTSWdfDBdjjv1sM9K",
  "key11": "e2BVRGA1t2JWt9Fs5AEa8nFJbYN8ANLVih39PGVDm8jrabcJ8gV45reV6Ezh6GwVzF6Up4RqSBiEUQKRREvjcNh",
  "key12": "5SU8P2yUHAHryDgDVD3aUX1vZqLkPTEJrvRm3g8aeEn8zyHJnk486Upob8Wp2pCBVsiZiTSxswre3ytEFPFvNA9o",
  "key13": "jKuyVpC5qpMtwE459P3FR1N82wDPp2kGtSpPUUKUEWC7dfoRFsCr3Z94tkJ6gvK9Tenx43xyYucYqsbyyWQ9hZY",
  "key14": "32dGzZZfrA6tFoTwkVKMehvpskFSWJ51wpuTAwyqyin6Hi92yb3GGeLG1DUzReUr17KnRhNzfwmRakr54CdiaZQJ",
  "key15": "uMqUmJomejBUibdoPCurneFFkn3R8ey7MEU41t3NcU9JR1uR66rQwLczZUTbJAy1S2pvoa9pDCgiGBbyDQgekDu",
  "key16": "axyiBJkJx2R7mnhdH5Yshm5mhXqXm8A3NFkSUYJRjxWJf2xxtHMpCANSSfLEJS5ecNjPEAQC24LxBymwFaXMAMN",
  "key17": "5r7U1vp5FKZ7Vb8Cad4PJQ7mn6sXpJVmDNnYysy38EjZu2npQneffz5Lz7iFUGNFcFLPeUBRaAtQ9PDZf3GYvzuC",
  "key18": "4eQUeWZpAmHFpamde74GDqqGQtbyYqLcWLL2yFcXmgniAXfYt9aPaVn1u8namZAzSHVYoUwfZWje5LM7FExP63P2",
  "key19": "66qqmJJxxNEx3ZApXwMEFEUCaVrnKdBqgoGH6VxpbQjjuPEayYuBM9a8HVeVD6RRJFqHqax3s1PQJcrCrKwgnTxP",
  "key20": "3mxvfyiDdt1TH3paoVSrvfd5bLgTMZ157SJWK6FeFUwaLGmHo9UuPACJyTrWdYToDWwXDChk99X9bsto9Ui16x4q",
  "key21": "22kiT135KBLQQ67mh4nX12kJBAViGKo797XibCxLP1tNZUzH9uydGa8YzQrsCD8CGHnKQgPEW4v6RYcaFyr34qfJ",
  "key22": "XTmSnEQ76oYunzPQxKU5ujTsgheDqctYPWkgKAuSAdPF1rcBDVpKxfW1UyCev9KPqagRJBx7h8P3zT3kztAkzqc",
  "key23": "35BWkKJnwgmtSZqjsp2DscFBMbjAnt2Srx84VRjzSEQkzge99BzfFoWyMgTe6guYZyAU8rZxD3FBteWxr5WJQVgp",
  "key24": "2iRB8hLGmaPSNkTGTirKqKc8EqBDT8QdVfWBDfGCVUS7pxz8X21jQg9sm2JkvXnxTKZgJJ5X7Efyiu1jc5aQmppc",
  "key25": "4gRsrY2W3ZzjBensFexTXYgEjBcGjvk6FumNFu7AHof38qePCs9HBYG979yn6iawVM6qh1wMtrF7gf9biQZCqSLP",
  "key26": "32jPtbCFP1wJzVgA6TANjz31rAE3LW1Pv6DYYKkgWQ7zf3gXNsWk4jhaPkwiUssH2XV9xcgqPEJgA2x4T7Edtwb8",
  "key27": "5A7oe4uqhk4WhSZM2jk4trz5Nycj6UtVw5BMwqzCCvF3M774kH1rLDt976Zc8QBMHM164WpRDvXdbDdosd4f5fuh",
  "key28": "NQ12PcZX2q2UXQeogDEoN3F45xQ2n8DVn2CgZkNRC2Cj45sUHgGUAo98EeC9P4EfYwpYRzVs1XhgZSkU5hFi34A",
  "key29": "tqMLX2wWXzzryaHuRqZMUWDCPw21mTVtyveRikw1FzmyJvzV2jv1Aq1MEoEzcEe2m1TJ5Bod3yyk5tCEx2vRHhV",
  "key30": "2DwoXV18y5U84SNwDVkFBJR5Z6x3HDM8ArgufzAptEKK9qrD7GGAEjiVd3rdyF5HKDNx135kHj68CjLTpARi1wHM",
  "key31": "kvmjw7k2iXVSQo8rPYoG54BgsSHSi7oJJPao3CMKQuAxSwcNueWsUDGgfrhBhBzSzQtuzh2u7TZ6fcehdVs4a4L",
  "key32": "5PNCqrwcMKN6E76r82ysYxQfAJzRqy3SFMGSnkurSqb48pMGq82uNP2P7SexWq4F6t5A4EwQfb17GwQg4QpsMb2D",
  "key33": "dhA3bBgpNM6Qv9CpfVfCTcokCSmNRXBhTrPyK6CVWeMfh5QpCcKJuHcdcXSQd5sDm6sbWaGBS7qwShPGAvi5r7g",
  "key34": "2WwgmZUYepdwKXmHRrMYWyUFVcsPCMtu3JKmQ5G85R1Ndm5cyeuA7YSuhsvdJDy7hgHk8v4bJSJmf5MnxSpFXHDv",
  "key35": "2DynacFuESaF3sVgg2qgZ71qkTzbc2Xr7nKZBV25GX4GvZteoMg9gpWjqHwU9rc27sdz7qBJk5pehX3E9ZaDGa6Y",
  "key36": "2uTCbTfDfAfPp7bnWZgncZXGx6kUAaCU64YBruyVxLhPLp854b5qhhPMZopDm1hZmtoyyYbsZWuWokyq5WMoSiuu",
  "key37": "5Lr26mgzEGj3R4ecMNKYxSi5ayvjMbaaHo4jt2FogZXoDAh5k9TDVh5pYZMuEFMAPzJBWAftG6mNTCGfF7ki9JuB",
  "key38": "3vroVBndnqeV6N3doFUDN8Avn2jGEnGUJ3hBPdNsVsWVVAq8ENThTR97k56KKnSBZPXjmEgVYLxgSibtwDY8eLCb",
  "key39": "2kpBvbPd4Bc7nganFY9VYSNzdyfsHqh59Q5HDnpaTynznsVRESHNCaFY9QaQXVVrUoHpS6YwByn8e48BnJxiu7XV"
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
