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
    "4aN27kQWYMwoR6gyrMQaC6xAqm9FyApCZ37faz1kSBNY6gUho8AnjB6iaP9vMc2x7gKXe5pNNryQtafXGWbYpUA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r5KduF49rwS1t4cfQuM6hMYZr2iCBWbAWMFcV79eKohMNfnwB4F6ujyxWFLXMLFRpsfgY9b5CPFtza2W2s35M5d",
  "key1": "3uU41VKrP2CrDs4QDFWKMhv3kuZakuZbLBQm2zVGPuVX1MX8nVMgbhCwSsTwEhzV9yAPgYw1rv6BPh85ZgEn1C9R",
  "key2": "33aMvCbxmbuZyxKEWvEdUqKVQFHgg77pNcT4shaxVWWafDmMNiAZ3DYtSPT63FFNvPzgCiGYNuMNuQ5zBPgxD2Ph",
  "key3": "53wkhk2abMGnFdo7JxcXKfNprwPRAf9mmEKYJMBmk3B27tmoNNESdGx291SvcuVhRtbVirbqxfpkjSDUKRgDUr9g",
  "key4": "gHoisCAPFqSKjmA1tNczJUkDWZy31eYxRaZ4pjLdGduXQ1yScinBqNmtBsP9abfU3mhovTmc7KpxiWHbpxUXrGz",
  "key5": "5rBvg9475GrsZ14tz19kJHvEbAVyfAKtbHgs1f7Ag2YAGRFAjeYSVfCe8NhgUFvpZn97uA8CeBvbQKbegkhViJdb",
  "key6": "4pDtMXV542MGub5z5mHj4xSAnm7SoGxsurQH2g8p8q6WGZhNKfRUtq9XtNCtVd3zJ52TiL4cN8zzRvnr1YYdL5Ka",
  "key7": "4FbwEK4J3j1S1Q5a3W4iPaVYLn4FepwXZJvFu75eQcSjyjFWnWedVy6Br3M2TK8jDQ935YaigYwT68piHuCZB5q",
  "key8": "2T7pUPSdkVj6YoSVvGz7ds7V2vB8pJbicJB5aDcLc8P6iFPLboURGk4znqZqcFGDHWdSPsXExV4vMv42Ew5dsTVZ",
  "key9": "EzDZtH2oD2W6tF1nguTi1payrFk7HqeqBW52FwyvwsVL8Cicr9wfhq1MxUfwCn7peFiEXJBeE2S7LuYzGDTKbdH",
  "key10": "65LovNKdHfSqjGBgdcwdybFpZvPwgFQ3nZooiMR5Td9jTZTcjW9TCsGF8oHY4BydKs8qnj332CD1oVpWNmdDjzV9",
  "key11": "2MurNPFYcwW3gMtEL7dxVxx4HUV41KL2GYZhSpWcrSHLUXCa9367uJFQQY9VURNLmHt5NUJaFkykE17zzhZzvuGd",
  "key12": "4g3b4yueBse2ngmtBK8XwGbKsDKRyVsuhBJqR1QxBcnQVeP2wmkXUKmSogqg9xDVyPoBsgtKsn3zicT7RShXFVoA",
  "key13": "3QYGbfVmxBGsnF4j2eYxS2KxhxiZwNgayYRMGcVuxusjdp6KCygq6CWc2Vm6K72R3xUZTv7vcjp9Sk22UreVDeqn",
  "key14": "48vp6tZH93t6abqi5wQcfozkBLFSytJMbj1qQzmGtMNiY367pJ2z5zWVqLejGfZQtA8ktkj1B1aKkYoAk5ATLmNw",
  "key15": "4v4ZUNsmyRLCCnZeykp5TjX8a8jmTLNR3UZXkZSZi4Vy31NYbkHMaXuSr48ycyxtGT397rHdB9zsUk13ERVBVmFz",
  "key16": "3JVmbmYTBRAZ8WyyKTLD5yfSqC4fRoMvFiaVeEwAyzrJxbxon8NagohNGnvxfUQVLEQuxWzJ8pGCGxt4fk4rDEzN",
  "key17": "3dv7b7kFRZ7NGxYbp6dWdayAz6obmrAyY9C8pNih9BvWDXGiBHaubrhUfReSNLXXr4s8UYKgVt6Vv3yhvBqsDcYi",
  "key18": "66UyMwKmKNJX73tGeQesFiMa4BY1V8r5HUN64TKwgFgXTReiQT98PxyY9toVZqhfEE3Mu1n8Sxbo8ViKbFxxJFxX",
  "key19": "8SNoU9retVBtmr6i3YQbrPzWxzR6AMjiWa6vzHKJmNFfir5xJcqZvEbS2hK5JfTXtX1i1bWv4ZvwuNq9sr1yw4T",
  "key20": "kMeQmDpF4p1ieKL8cA1TBaM8YneazbNwGhpuNsWyvZFnPFYPNtW6isadAf24Ff3ZPSZTX5ZXE5yJwvgGoGqyS4t",
  "key21": "5Jpiz4QauKst22SxM9EWq5Y5GYqpKSwEKhYfN7NaZJJ4faM6yNtz1JzmRPhxPiwcPDRZBTNDXdS6onQ3jus7BgAa",
  "key22": "5fqEPffyUK4oXUzozVWP23BentLgVsGmkx2vN2rNzNGZhiHCzSrLbERC5Thz8NFi5EvLc7i1SofA8rtWshtGeCdk",
  "key23": "4chYJ8P4Ahoyfiwrzkw2WLnWY8WKdpAx4FkMWhnvFC4vodUspiaGDjBUPuUbQLRMxVnLchQdRbUiNDxWb3TfpwCu",
  "key24": "2BUTpDVR1jm9aH6DSBg3kGKQC5Ua8LL37vEYKGndLipScYkAW6bwZckx2nsynUTrXNn4avtRNjR7f4Z3jbuQuQzw",
  "key25": "5X5s8157LZenzw28u1nWXtUM4Wme22vunNc8N9XtKMuXrSzkHpGn1aqxk3g2kNRv5RgDxgV25K3PgpAX8HLD9R8L",
  "key26": "2LvkDkbFWLmHFmdxDex8hpfYpZjXFFbYgVebHfgwAhnt73pG2g3YmRTMSJKiB4qySBsna5f72Ck3A621gfTjjM3z",
  "key27": "4SvANU82XXLAseAJhqNSn1MFGtHLcqoA7kGhyZKhktdzSDxnZvjrwD7csmARTGFLDRfCagzn9nHksQE2kjqHbpue",
  "key28": "5sgBMz3dUUNCTVpu4uoWwD5Xr6giKBMp5yZG5bFAhEHSEbXH9er6HgJVthePSaNYsgRxzrSK6Jtkc6muneFRcQmk",
  "key29": "3KPfprwTjjf3qyazWtgf84Hwox37YJFR7QdLJUDAvDKGDxTCr8ctATJdEVgrhY8BEvs7nT7wfufK8VgMLNujpAm1",
  "key30": "6EnhbnbBJMH7SqRorWeF72aWYRUWrw3hvggv59nfZrJHXuniZBSCwfrJsAsM7vybtWVxoMwWFV4e1aKW382kfY8",
  "key31": "tfxWJJL6ukDPgUSpXXFju7fbZr3NX45YRFPCwvnkrVhzXUhu238gQVSPbXMJs1f6iGjneL7YSLNzn1jzz1q5HyC",
  "key32": "15m8qH8MMtepgYSm3bM7dXJyTtYymYPdNQT7WVGzWBacYix2YUuquUu1bNjn9BcQuoSFRFzhMcxwcPZRbVfo5Tn",
  "key33": "4cRyF7X8DKdmk7XvtN7rENYupUzqNB7RZDSJ5PeyAacb3kgHNW1zc5cSg3eHfMjGS8ZWtPTJiJcovAf6B9CNymbD",
  "key34": "3fubMNt7BdwDziQehxwdcW7Kw3QDTkAXcmqie8R4S76xv7a6gL6mBuR2BU1HGpUbL44zoBGvzqhJocRzKYWfZXJw",
  "key35": "ZNHxyfsR9xUTBdW1mKpkKpZd2XA6rsyc9MECMbCZYDBaQb25SodcRqV2MhDTbxtoCLbccb2nDbQHf2LZhTANXon",
  "key36": "4F1uTYsVH5oytz2M4dJfkSicVugWHyHvUMSWqaovBNU2qgXkJZ9Kk6EGcnnuveeNME2WYkA65U1yf8ZQqmLbSeha",
  "key37": "1MrMH2UN72tgGVy5a5GopS5ng4nnDjm2B5axkKbBiucSJRvFMMymFyoiPA5wWd2WLQcgVCfDhgjukkRXo3UZytz"
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
