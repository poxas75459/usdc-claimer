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
    "2GkzisNeEFpSPAMMDHyafvmgjjxEhvoZ9KtjSNpPxysY1aAanw89BDafwfVUPdQn8mcuwjSzjQwPGDeaqKizKmUL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fxYA2LoK5BXSEZMCyVj55peoFoKG3kTjcR2b6kHtwzT62RdeYMnLNZ42okQLwVsm94CLn9kDZwaeVRvHU7w1Ycv",
  "key1": "5KAytjR9zw5SmbpyPSQBY4M5oGGnThVsJLUxT2i9yzjyYdKFcHZWNBju4TDVQcsztvcxkPNFNKhxFv3ZhEP9MMfN",
  "key2": "41gcGmLRP7J7daoBK3R1tRhBc9oQ3SAf3k5Ld4suzw4SSxY43e9cJovNGLiqzepkzoV4j1Xidmk9ssKYPBubkKPj",
  "key3": "3672w8mKS9VWZnbMWvKAPiL3oGooFdZWYpxvuR3T8EegHh8awsNxy6FUm3x8jvg1X5SahoDS9FQfdpzymRfiFtH6",
  "key4": "2Zwa1o5rrXN8i4i8vAJ1ZBDFsjRUnNEjHU7PBADG58pK8CXZEkuTWDxkTE1WqP64XhVDQAFBP2digbY2kQ2RD8jh",
  "key5": "3wPb2NyxVV95J1ZEFfZUjN14XwQoCAuw3xPjoNzJh1PuMXqpMfJSVHoSrQQgS2pHoGGPgkMAtMx4UWbehTh1moWe",
  "key6": "665wX9Qqe2YewJ37sVUKmPvvAZCX6f3Kkb8sqFsjbX9mdjf8rdiFUHxVCgjp6erBTv8jHdWLwsHB18uv3VZXEYaK",
  "key7": "XZCebuNBkFdxQqY8xvWf5dwSzMcaUakCbn6NvwuGVBZ7Ge7LS96mccbqeSCiHaWNR3jsvP1sRZTb6GNvvmddaJp",
  "key8": "2hBY6AWx2dWp2W5ZjR1ucBnaL1RrrfmHWi4FNA4h2ZsxzkzDd3UkAKhyoobWiTDVjUKKJEfwUd941MfS7DappHmQ",
  "key9": "664TdnbC9jU9duYECyn76ZRrcDPJKhBDL32fqLLinCjKbREAc9gSQqkMGiMQc6dAYMij997DrsGRZDVP4WoCazU2",
  "key10": "56Yq7QaSqjqJEvFekr13gUx527mWDajxbKcLAoM4WAjyitX72p8ZGVn2dE4GBBTFUy3mn1DFgmLuZa6b3DXm6t4q",
  "key11": "485EwAVa5N1qsgwPGkXxPBAbC7TtUQe3AgNyCr4sURrdDfv7WxFEraMizyDR75uyDe6BUeKJFd9qAWMqyv2Pnz25",
  "key12": "2KqTdoxQ9kQyjgykFZfMArDRZsn8d6L2wKNU2jLtzcrTViG7tvSayYGocTRtocc3q9QHwZvRdegFUTFYcSKUozqQ",
  "key13": "2kpy7MjDcJ7BBwxE6xCGbNg6vPMDCPAUxjRerYhoHZ3x5Aa61GmCSnDvvuQoLUZXdu8kauktVHipixANXNqC3o64",
  "key14": "51QzUxYP97zxcCstk9VTJNBxGEzszWUDKRYzRV4DRc2PTADxUXGp6DHvEqtKyx2X7WGV63RJmwBDbkHQ1aFwFFAU",
  "key15": "5EnMGjkTEBJGjJyte8ZoV78VQB6y7GW1vqFfepkEgYFC5NJSVWr4Rop1FcpcG3WsY6Hr5kq2CfT3MXyJQfX2qpyW",
  "key16": "3m7o17kUysPEXswgvDMqKoqDBYF2RjCq7jm1pWiMAj8zs5TVF6NiRWQCvjYAHc3ZMzHDUpSww7v43VY3ZCZev1Vm",
  "key17": "5S4rj6BCjyD42AqhYmHVQruzePVNoXWwoXYmBJ8CVpyw8tQM78osFfiGiATeFvvHq4NNcrn53Kf5oFSv2dEzAKEY",
  "key18": "HQcBH7p9WT5Gs9gpmkLqPfUG23Tv3PJaBVo92FrYk7H7KPLYASQ542yEviFyG6iRgjMcfbr4gNhSyZfERa9PQAV",
  "key19": "5fCDXieeZb6WA3YmafF47k15J5BkqCx6i3G7Ef5TuxRZyPK5Fg8AKMskCcKCbaoC3oY1HX2apxK4DEYRaW4XeuKQ",
  "key20": "5MnxjeKeHntXB1EmiUmhh9HLbLQMNptG2FGpdjmVDX4giLnF4LiT4wKK5WgRV7ua1EUMReCwaVDq2JC5iS9M7ZUg",
  "key21": "aPyjSGyYx28npAShD3BwdPuez8kQg2Rk37vvsrghgNvJJf9WAULh4QjsocFCVj7Rstw5zoR6QQVhReHCkS7tRhp",
  "key22": "5eT2FH2oT4VCLWYatDuvXfve8nVennSe3v2DYahuTW9c6kK7imLkFUKmApeWy8xbBWEdN4TM1HwY1c25F56zzRCd",
  "key23": "23HgZ583cFbDmsxnskJTaaYs1goQJGfWDvBTHRetyDkBBwapt8EHnEjYPksnPfGPtB2aJmLbAKndCCmkZQ3WAzpA",
  "key24": "4x3aK5F5HXAZB2vy8jy664QUkxMCNvZ7Ao4NMiTaHtXWdwb74XHsn1jmZpcHU8pAgKodH73oXGg88UpgUQ8mhKT3",
  "key25": "2Ro5B2fRjrgaGJXXBUizstLvRrUEuM6JLn2hHFZ1csk1yxkv8E9DeKWDzjWq8BFEw6wNVxPQnLqeMVqHwoML155x",
  "key26": "2EEboS1fupigQqNmg6zL5JpdAjFmCzEqbZjoEZxEsdceUzMLtwEtWUjRjncfHuCAQJrWetFxjiawQJ9irxhMywtU",
  "key27": "gvhfPYzgRny7rvUTcsVyziACpy8R4vem7wPnxZFMipzpBwXuiCPpiXJ86hq2po8nzQ9YP7gjJLqhapCAnoT5xCE",
  "key28": "64W3MQocEYf8sqNXsVpfGvWW773W42h8GSNP6Cqe54Pwa3aUYwd7Fb8hdCsRbY16NpRZ26cAhd8msGEZRqHRoE7b",
  "key29": "4XmKMRaMTbowLMkTRE6ifusUtqB8kuQnPsR47ikemLeCDKJvZPKDRBAiLTADoN8pPpqSbawjy5fFTBVDCYpNuah7",
  "key30": "Eek6AcjhDH72TvZQ1ECuBwgA9pCqF4D5WuuGELTxBk1WPZtTdiphx5MwegVkqE3ujjksjruT9G3NxzvgvZwj6Eh",
  "key31": "4SCUnUXTtNQWJ3KJxh7jsoRwu3oNXbbv4qjFTPCVGffbghcRJWtgt7oKTW615pMAT9pFieSHx2LG6r6DX9KbDGWm",
  "key32": "FdU8RPSv9RSAzSDUPF2Zpqv6hfCBq8R5BXsmWshNhSnfdpjL8CZSiTsYNpwX52EcWuWAhTHVQvCnz5icn9bruJY",
  "key33": "2t11vf2DsnSDqfE92q1Zro8APJ7MXVxEaPfYQw58LJH8QVUz7e6NjjJN8MCpPoSPKmz5jRjLWYjUCNCpFZ9MowRT",
  "key34": "Z7pQJTa2HJWotR9wz2S7C3A7YrnBTZYU3goDmyzczXR69sMfuhGYxXT6Z3KBHy7n6phTUSMKs6zAAxg57GUdJuJ",
  "key35": "2xXRU5EjWTCZRUizDrDytdRb972asy8tfmhaVjdkduosH1b5PFJMgXzuTMwzW36EedysVFexdVEBGYaHCTV7HqEK",
  "key36": "5F5utDk4dJJzrBwMo3vc5xG88a1wahwcSP2faWg8j8bpSdPNnAEQsxt1515kXkNFwwuZiRcrNGCuWUJhyub6dQaq",
  "key37": "3ygi6B5ywxXht6Fwnene93GzFYH5uHGqh1j6ByBEhQURuvJcSvWiEkowrLGzHuTFuxkJmzjdYz8Qnrpy99ZaQCma",
  "key38": "4A95Z1Y5h5owhkSmfgDHZMDHB3U8H2LwfKXx2fXhQ2e6ZdbESqWWFbbjEBgMqNU3wS6Sus3zk3qu9TDhTo3vNWva",
  "key39": "5TEsCbwHxUub4Ra7usaZTUSFutmwtjo1DvA8tHmjtYHkNzUrf6BNsYKAVKasgDvC8aZprD9UWBS4Kd8iyRnn4jMN",
  "key40": "h9ckjRWFWxaeVA1C7U5tqcztzjviphjsUQ6ZoyJFotehPtqpxhZ7DReGtAZtwyJmjS8dUSJbCTZbWZKa8D3cy9D",
  "key41": "35MYLDLAyV4C2DqPqHJssJ6iUhz47BKPJgBpXA625L86CWdscitWwhndxci1XMJdgwRScDSLfvWbRFKmRGmGtRYc",
  "key42": "eMS6AnorvYZuYgBBPyrnbBv1E5JFpUbrpDESiEmmLYM7u3aV3dkvyHEDnjydgUCK5YNqSUKZCDMW2xrKVgWc7iQ",
  "key43": "2zj5FwobYbr5TLcYT1bzGVcBGVMF3CtAwhe2obcjLritx7FmDfdeDnWkFBEH8u62Tot8ceYvataiyyztKyCjRUmZ"
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
