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
    "5FaaEXeL5nB8P45NbVz2nHNwJb8hcNiwCWiLEPwKe6QGbBztkepc3pPjpyT6ng9VCEzVj3DhabNomAHYUB6JNuJz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57FRKw1rZsw2F9WMq5pYYztN1y41BbqxqsFGaPeKL7Fgekpx4qq1FVmxGAY3LXmbM5hWEho8KJ9VPvb7jh8CMedQ",
  "key1": "5m5NUWm3AiWT53uNcoU9uZqsyLzR1Uk21b7J6YNc9SQcxNg4EtEjcQwL5MnQqmLgqhPiDQXJsBYxxGJf7E9ojysK",
  "key2": "5ooTpWcvxTLyybi48FtXKjSSiLkbT1yz2DJdshFsFx6CCSbb8155wssxTLebcNrZWEogGDcv54V4C6fyTTjT1UpE",
  "key3": "34MSFQHkPm98Gt3oMyyNmisyPpFGztB6ZMu2ypoLNw5N4nmF9mjp4iAPYXsuQWEHz4p24HGGwJXzdSL482xCacJy",
  "key4": "4FvUpz6qzXiTACtmLDMCtUtbMaf2MwkraXGj4fkSeosg5DK7kYsJtUdzQPHjNU28boRBXmrc9Cw4CPStyit98CgM",
  "key5": "2KypgJseTRAPQnfAGvC6ViUBypZ8yF8EhFhHmDhtRSoBwdyb7TgfHEJfLtZ2u9WGrnTFqxVNyiCauw1mN8ciVKJt",
  "key6": "3gbjNGXw8dMMThwkMqMBAAwsEJe7HhwyrVSTu1tWr64MsFcbq77jTEjjNLTcjsySpwLRAB7xiHrQHjME7EuyeFZo",
  "key7": "3xPxPeaoqRWJso4iERNWjXShLbzVQphJZxVuuNw5ipaKnzQVu7CdgyjFP9qNhLPkCSAa48neqcXicCTCuCqKEAzK",
  "key8": "qCPoatbSFhNkHWGqizoWVJ7cLBg8stSwWUUyayhkqGyGLUt7uzfPRfEw582RMfFFxm9s3F9S2tH56qATmD8cXev",
  "key9": "A7Kgte4ZcaaF2d1YiNE7zttSbXuNy43EzNaELXrG18y7TPmana8w6R18z1vD4fWTicCy1dWGpr6rPWJ2xP1itjC",
  "key10": "5Z5tinBjUQqj9bYz6NQWorGq7cCQcuE5xY6FjGntkuRs7kb5oX2BMRysf3MHkMV1tP33n4Dr4Sfwa7G21j3HnVmE",
  "key11": "4Jo1zuAkh1MN2mvq3Er5EcHeBKjiB5Yx2idUUMdAaTxqcNH5XG1Ndmn1ZcPtAVByA9JahkWRuaUrRKGLUnRTmJEM",
  "key12": "4Zbh45MzDxTacjrRPdK6VM6kUrKt9XRmDtzqrL38JkGonjQb9EaBDmLeP8aX8EooHmBxx2A51Vh9d1ftB3Lscqkr",
  "key13": "4JmjYRqZUw86nWcvFPGUWoWsTyjZRAG85zVcs89zQi2AvWf9CNvRs62QoWsjt3hHfWw9Lcg3WZzUgXSvP3ZWaGvA",
  "key14": "4wK1RqQkaJZuzaHjYoF43HpTxxfTsBCa2JBXT3vuCax7eaWM826tQggewf2LvQDpgZeyHmGvsNirdm1Ytaaki6qX",
  "key15": "4sWCsv2ScPhP4EQyQUXsjQthpwWQVdYoLAFCRJWjYEc77NWWSA5NnVFJZJ1hFLWEYZ2BQdoqfoy1TeTextfNzGtL",
  "key16": "5RFRDJDXBGZiyqo3j7mdTVUf3xxtu73uhTcmkQ27YxnG6EvMWKSTengqPyN8SrBfTvTqnsJRpqWPxUnahctHXQfs",
  "key17": "5azgwCApVicL28mV7boUBZteUqc7EHNYCagj638XYtpLUYCG9UZPKHbWQ64u1DJpPFU83osiUP4ohKpgFZBN6xzF",
  "key18": "GdPppjxg6PdJyNCUHm68SdF8zrbghxYf9VDWsYYdjRc1DoJPHsyZr9fPQNjCjP9Vyd3rXJHctjzH6uCqc3CkKLw",
  "key19": "2V38kPAJd7isfrbRxjjTgVeLUvMrhwC37iCdkDuxWdtruPbG19eZQ1VsG8xPSbZC6EaNFjuZmYXMaYZuNU6T6yAr",
  "key20": "5vyBnTGHDbEAgiNMQWqWihBaLFXoBSZDoTcJRTeuTQZVYJHx72zBE44eiK3PrdCVECMBjQWxPwsv25un9xYusX6D",
  "key21": "5aQKLqDxffMhpsoXJzsrbRwwxsJz7KLXSnFcDuhoDvSNeSogdMiFvUFxZ7CcCdrkX34QTFh9b3E7LVT8x4RzaxWa",
  "key22": "5BFHYHVoP73RWa9BgdEgZvAvQ9DNZXXXKdXPfPehmvHV4KMKc4GjwoFd4JSUiVxBxfkBuYGZGtKNKjtjuY21t6BS",
  "key23": "5MGdGK19wfYSnzVNanVo5bRqmxbaFzSXizKLpUhisU56ZkxLKzixwdpveuzT9Me9P2E4kZEtb84wg42UAj9J4QQZ",
  "key24": "5majPqyo79JKBwpZbHFfVkDZ5uwDfNbqeeASyaUSUJKo56DB4WCtDQag7CZR1xNtvk36AzhmrGSwQWyqUEYucpL7",
  "key25": "4S5T9R3G8o6RcMv3CzfMBHZyL3oQLxtBrp2L9M6Y8RgdfPw7x6FYmNdECMdD66n8coy9YXnhTc8qA8jewRaoNcRp",
  "key26": "36cLK1WHcpbFoVMo1Lstjqg5fTz3qS6Smr3coz48YcwvqPbmCofnVSYpPZfXWksKFbwQS9Csna9qq5oYK6oZaZKw",
  "key27": "2GgAAmaoEoSMXRMUru6P8HPraBdfd5PJNHb2tgDT54asYLhdwgat7CwFoRtpthNyY4ERmcgsQSGHkkcH5twNbDDU",
  "key28": "5q97VXmAYiRjYQEASKihDEQgKByWrPeNeQ44PitkjW2h4DPkb19ZjP9NfoKPnHxm5HuZ2EemALnZEmRMi5GHyopS",
  "key29": "33Ld1PyMJeowf9e2e6AWRBw9bdkSr1wfwZeRbN5hCJiq9gisyMUwsDai4peVrUzFNGRvRUZpizq3m4C6Pii2V5Zt",
  "key30": "3Hy4T7QY6Q1Fe7UsUpUjU3xkuLQtDG1mAaYhLTRkQbAyfP3qftjy3kGBjiSjnjjoRAKMYagfxhCPtSYE3yX4iohq",
  "key31": "5GLm6RN6THdVZcyrjhTtEp3xiXUVZ7HiBQppj4EypwMpv6BPwVQr3YnuVAEkvvN2NXnS9tsXUxjn3ouWnoR5Lu8j",
  "key32": "3p6tJKU1jeATm8voJn28XbeFZECSNp98oGaDH552e8e6PoJbMUFfC79YRxvgU934FMQN1Q672ScwQ7oCaDF7cw3V",
  "key33": "4nZ1wVrg6Js4tDG8kRzV6BmDmePodgG83DnN2vVrj4634SdahzQLfhVhssxVeaszZ7w3eGq6DHWXq8sSu3Zjd8C2",
  "key34": "3QBED1FaX1G9PvNZR6fWYtK9ifDeVDw4jhz6adALRYcATRxRaVwH4BjTDwuf6JoaJGXjzrJT45q14PnaVfjXHNGs",
  "key35": "3B86SKuds1jVFDDJqYPC32KDPTqKTYcas2BsLidKUNEtmYRp4kiq2hfqxNKDKmmoj2nHVcdyRWvnAx49CdwsutBn"
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
