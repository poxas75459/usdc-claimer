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
    "4gqNdMMXbYEDZout51NVbN9eYotgydhX8TyW7mg9nEff6KsY9Was1yKK7ex1LiEhScS8vbmyYTFZaz53amvbscJm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J3XzxSmTvSWGnGbR2xfPjEfwCqjzKv76i8Kya8iR4GpvysE5Ye4nZ65cTLwty9giWYn4s2SbUe82Dvk3nw7o2SD",
  "key1": "5PkrrCW7UeFVDp1kWNgxwpRWXJPdtpPMp5fDuDSnqxBKCEqiMyTGA9UAJLCP8UStupaksPYZS7cTgHrFzzpNrZYM",
  "key2": "5BJC3JbN2ZrdyRsFvhd83R9d7r9idPCZctmMGhFPFDuTg76gw2b5HczWzVPkPYR7PG1Y5SbxSV1hNsgdTBcwQhsH",
  "key3": "pMx5SEME5ASryV4KnVVYDsgeSndJVsK7Rv5JUk4v9aM3VxPVJ3kbA4wRwJC8pFEHkbnMWrVWRCqpDrtJKKhCxuq",
  "key4": "2ddxC6vi2EDk1VceyxJYerar4T4VsEvJLfMZRyVY12n8cNpW4sUBKdXs6kvQmPe1nqmqztqyMfVdcdZUhxqEsgDN",
  "key5": "YZhKtamcphRWgSnDhgqiDK4ierXLQu3YumcFsXMne6ioAkY8rSwamwHwovVgJXbW5jEDTNzUdy6geYafxe7zS5s",
  "key6": "2oe9VPYfajhYBVEduVFZp9kQVDm4kRxZKVrnXo4MDwMjwo4QsqvQwVoPdyd3bVrSFYGfyKBzyEo5onYSeujkABed",
  "key7": "3y841ECcpLAmVfMxBXzJE6NGHe3kfQdyVSPEUbpSemMCinJuJUYHrJbAiKH9CSk41Knc8zy7pvuJK5sxsHLnEFs8",
  "key8": "5HCaMqfLnUCWPKELxqLTBABECRhHdaKotbVQiDb8gdh8eEA8Ns7fskLmqW4qxiX2PJU9Rpw4sLFPYaQ671UYsvW",
  "key9": "3mQv1j4fKWrcSPjdJbQcdLbboDu1NWzzfHRsFwMWLTnih9XBqjPWsq8UrQA867yRLLKqHMhpfcfrDGqrTo2Pe4qw",
  "key10": "344mSGPwDTzsv7LwL4kPgcTRBBjJ2ddyjBmnbHsKx87Ab1At4C72UeLLtUUjszY8BJUe2vRXvo6S7UHXBPV39Gfc",
  "key11": "3EzR5JD6TnTkkQ7xLgWP9ktaAaoZHRxJijPimnFDoCXrNDpRci8x83UwreUBvhW7mEr8U8CYkxVmMBJvFQfWUAcj",
  "key12": "3e1DLtuHaMw8PJCdWohQNQRtLnU4EVDMp9UFHc7eaR7uvjumi6EtnyNKpLiyJCL6ztripAqzfPDkuFSiCo6wS588",
  "key13": "5yVB4tZCBbVSBoGGJkjdnskA3ALJdUtCtjeG6ExJTESXirJWS5VxJ47EiTyuHeBrx8nD8zbGBubCB2XrQ7x1gMpi",
  "key14": "3ehvS2JFgC5eJW9ztZz2yKqQNWg4tai73XmAfizFCAVgd7fXr51dZneqvaMFwV7BRSiEjaEh2Crufaw51RktX8gh",
  "key15": "3Xo7g2xZfTAMG5KehxtnR3dthQ58KhSMkDxkb24dBDMwp6jFWiTDnQx4BYtoAw7uY52CaextvpiMH75RvwM3qtyc",
  "key16": "fiJj5CHPRWRSxoHScnZsDGaANsRpjQ3TBBBgDeYw1PgZNK2rHuN3TBUDSBHKmKRamxRZYxAjXcB7YRaWQ3WL3bw",
  "key17": "or3oXyNVPRRkC4kt2caStx4vaXeHoc4ykRx34Lj3J8CfDrd12jQbiQkx21wqZ7k8ppAcmGfS2DNRzteYhKCFUDa",
  "key18": "4mF1c3Yk75VBgFzXjcs4NWS6C1d62bewHjm7PpLEd1DkU5pneuujXuCq6ZGU5weU2X4bLRtPUZWktvuEGfRe1hjr",
  "key19": "5ssj2uBYx4rwLde92yN1MvMK5FBTezRFtkpF97ZuoYdQ96pKzxm8VNBiBcnHbbDzFuQCLxAHiFBkdj6SwrfnN76c",
  "key20": "3NwwVjkYJ5gXtUt89AXNbXHkjMxp8QoegbBjzFKQetMN4ji42abaM28MNnR7PdZjt5YfC39zexD9hjkQ7Wq98ruf",
  "key21": "4k6nrTifsnP7gvYRjZB6NN3LqyRxe8DhcsQUNaGx8Njs4fHeZDeJTd2grpi3bpp3yr7FYv5zWm7brMvAtCBiV1gM",
  "key22": "36BJ6fwXJB1mrAzzSXs6bRaW1TjNyAfw54csy9fk6gTwtAG2ZBpBFJbXu7KkbMA9usnZzgxfgNMxFk1AMijJ4mGT",
  "key23": "5ca9R5xVTyW6WCVa4B1apGuu3PnMX56Rx652toNZPSdx165B4KCrLwhz1rHGFXFRj7dk6E2SoFzPdmvggfL9SwLf",
  "key24": "5isfdeo1AVRhWnkFuR7EdGVwTfnxtQGLFEVPtfkhykaGrgQrTtEUPeUNSPHwgD5Xh1YD6bsdScNEdmL9AHETJ6DP",
  "key25": "4krQXvwfow9pAgVbcaw3hHPcZnaF9bEh633jM342VyCfXLZT2MHw2dRhnQ6BC1gYavQg3wV48hti7xUSGQ1DxyM3",
  "key26": "4b2jjcWLyd5xwx2sroNRY4WKE8v93u1TBYd4dDKfA3KCuaSj35FwbHBbQExfhjo3xyGCDMyUGGpw2896BUkWaRNe",
  "key27": "dCwKkMG55Px5c3T7fsFjBhJDcmM7QrAHJMcp7iLxbX2utFAYFMQv2nhmb9TxnVJCt21Ufaeopxth8dAmmhP4QmQ",
  "key28": "V7n4ih4dVbWh6MveGTAcRcCVjucc8T4iqMiQWAnTd4hoKvGzrP73b4Eh3Mo2MC6Hgm5N4VaF2gvsF2jo4XAufWe",
  "key29": "5j9rJqL6rospyoGi6CuzGehLnoajDMfeqX5nnNDSaiVG67AiyEJPLgaHCVqXfFvaMuYPdPRsAwcNXc9q54mymbrH",
  "key30": "zZkxadBJBvNT92ntXMATqf4ZagPgsfsCu3QEXBZDKRez3pxvwTKz4fRC7cSRyqtzC3Q338tzrk467mF1zb7JazR",
  "key31": "4GEHB668a6w9nkKthnWqq4dPeXnci1NSepCLDMmQTeSue5FTtyQH8s9i6xRwtDEUGaxtGBETnm4yeDGcGiGbrMKf",
  "key32": "4TZJoaNEdizNquKgRcprGoTAn1TzQvFc7SM7J6HHuZ6VxjuQ3uMs2DyJB7BMxAofooXHdYWn93dguddwz8bLGYxL",
  "key33": "3fyCMxyUhKAxyhs7NdkkcLExYHHuMgAZNZZYo2mJKt5q511qLJHzqbu7PZ9PpaPX5aHYULk5rzzrGT9p1a2VmTGh",
  "key34": "D26JWDMpFyTs8TtXGaypweYu87vniqqa5DehDCtf4r73pTB7v2bJoEQYAsZ1rhnRyayfqG7kFTUscDkADb7qPVM",
  "key35": "5MHa28G8E8f2UvzfoQT4KrtHzhYzCKHgV683X68madTHbCPkzLJDJBFLsqLrryyewTjdQG3iW9R6THusSrjFATaQ",
  "key36": "2qnDrCrPbWVQdiqenpyDt2eh66AAhRkTowLMJFNAVfDahDguFmW2xnU3yy6hLXEfF6ksu5m7xKyFEDhNuXCgyghm"
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
