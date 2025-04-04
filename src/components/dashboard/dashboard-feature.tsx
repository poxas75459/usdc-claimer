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
    "3SeKVHnkDfMLxEc1PVTqVQu6UpVToEDL3B173pqQVTwTv3wPJg8z765N3vEXbojNFJVQmT1Vm1Y78BnZ3JxVo1vf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vLUWq8jyMPwKKKa4d3sQnsQZxuYVhZBwS1HXbWorPUj6G4UqhduoEAWYKub5X4ffcZRSQAXEjmzK6V9FACgGgty",
  "key1": "4FBw3UfdqQ19Ar6iNZC9wosaKjdPw7sfywsKZ8C4VG4fdCJKF33buia3bF2e9wH9ciibnrMeg93gVDwNaqmHTLZA",
  "key2": "2EhVcRBVxbQkd3kgW3kdMcc6YR8Q9Rw7jn3ZMTM6PW9U46RxsypqUbEEtrkqGx2TQkofKy31g7mb2xz3qtvQYGtm",
  "key3": "4UmhHKfcfT6n2n6hMktcHuLCSPEFb1CfvFA7n4q4hZmuGPwBgDeAucwmRUTdtYFAYaMB5BDAJEydzjG1xU7ci6KT",
  "key4": "eruqU9R82VcqoXytKVgLsTrycjtkrLa3s62NxkKNkufg3JbfyJiY336twN7pRx8QyZwUYkLyFULSxDFGNA3N64g",
  "key5": "4KFdmPcg1joBSgh26aVEtrt5rDKQ43oYYnpTjobba4bRnnwQTa8WLaG5ZTh2kCHDmS28pMh7YNEtbthYQZToAsnq",
  "key6": "pZDamqtV56yvGDPKRjanHwzjotgENFvDSFCLC8XV7ZYFPHVhbjwR8W26WzZQvR5KbiNVGKWmWfmSKErDdoXgNFr",
  "key7": "5gYKLuQ5jEPEB5EijpL6amkFDsjcfSm7GqQkQpmQNXhXYLdZe4J5aYuwgMHDNRRaNw49pr1nBPwgLNLLwSc65DBD",
  "key8": "5ea1fcVL1wjUXjH34JCKgWv36xD2RktS1c5qTWNng1HENjeBUMnKXPacCPN7hYM7arPXHtwRJTFCu6ZLTabDoz6M",
  "key9": "4y9A6reayHqEWrJoAFi8rR1Uwg2CUBzj7Hn385wPv8Eqc4YDAReEye5CXdLvcN4F4ept2RFCgLBjwhfNdit5jg4H",
  "key10": "4K7zJSD3oru5LQZwGaCXDVKN5c3qvFciEB3TWjoGfyYW122QWB5wLEH4PdFGkMfgQo1kt6u6Bqv3K3J9gF4P5ysv",
  "key11": "5gtH4JzSKvzNCLLzPN16a2fzBdoUtsQuT9z9HzMWehxge7rJ43DcrgxX5igmpHuAAcjnk7DCELziaB2jLJfzhSCA",
  "key12": "5A2MZdvZpMTndpnPeuCZVaKrJDkGmboyvmzWJbLcLrNp4P3WHUJQ7E7rNAxabBYfZj4dHNnudnaM4xKoGaZ5nejE",
  "key13": "xNRvCF5bKBnF2Zi2J4LQgbFNGTXskM3JuudJeTPmkhEYemNxm7w7v2Nn4TvjRJDVxCfJhzRZ2oL47i9dwLW2Rcp",
  "key14": "4nLio5CRMbKNux8pdfCSqSzJvZMfg71ZPpp4MDcZjpUEDgsWEiiPTgJbmTWsnJHKGYK5Sattip1jnsMa2DBuGAqG",
  "key15": "2wM6zNwqUukxdoKMsxqLdWoaR4P6VEDNEpPszzy4hZk8p6FhSwB5KRvYwRttWiRNGVRFfa1ktjD4KcQiUAVRrx3h",
  "key16": "4BTp9qUr7ZwJuyiNQpioTAYG731YGSduf2Qnd2Q9uYWkZeDFqVSQvmSM7xe8JyB9ALjWbXLbiwYQ3PomuHS2pCFa",
  "key17": "5rMyFmfaTe3bkUGUPCBe9TbQSLMd59RfFnk6Td9uBunXDsEwpACT7pSFAoCdnXVKFs4aWV1HrfgWkAiRnDgxjZAk",
  "key18": "2x1xTWsDPAgVP4YR6Las6tBC6u2ZKv37oqRSh8TrBdtN7HVbJijbmBq2bcFCw3TPvyx8Xyp3yw1QwKb1ZXn3SRwU",
  "key19": "3BnTKdMS21ZBnc1eZGi6tgcPpEV92tgPFta41jtaTmnmt1JKPD2u1cBL4FSRryFgQHRNSeebcWewXdYEbmacqadA",
  "key20": "3oHRrmHcjrQ1QPVuSL4GcFYtFkLgpCE5LSWqrRUQEtrxmqbhxvaKCX9QNvPox8xgiVah4SekBCQqKnbCoxzDEghN",
  "key21": "6wUy8RTdfLUJ4kdkBLZC43kUYFcxLpRXXcGt7MRAU4tpEVnBGKL9WwvysdzuNT3BwihpxJe2SUji5XMr1ogR5Yq",
  "key22": "2ukdPWwF7tkey8txe73CtoycPrHMnL8mwLUDeHzMvV6282G3hCnNPkZ3mUZ1PnC37YvC7Jj1easSdLYrMkAHs8vF",
  "key23": "2hHw5hnPNNggVSC587BTh1N2nC9vH3rgjUvQvPsrDK5AV6fP39s4nyEQQetYXQ7micaJnRcXfKymHrLX8dYd2GUY",
  "key24": "4dD55LZXasUrL7T3rfnPiUU7VsBKmt8qTtmTgAptbvQeKei2qr43RZZq6voSPhTDZK5fqUbW7322NpNFMvtYdxCt",
  "key25": "2zormjFJS9UJuGe9AavqvfXPebE9Wx2km67zybKuqWdiqGNSLFa9ZFpugj3kJMpUcgtLZDxHyVWrnQRKaQAnHcpk",
  "key26": "4cLgJ7No3P4S1BYXLzsyxq8JXJkpqWRfniuSVA5GiPD4f3HZGRPSkcpYFbiSr8A4TeKY93mTcxGZMDmXf2zEhHR7",
  "key27": "5Ae1nqU9wpmRfQVV59xstEtsmnU2rYJiiDJAgMiYAwsiU2JkBU36aiHgQTfWYvX6gjDV9czBbXyHzWFXHjCm6zbr",
  "key28": "TXiz6mLaLbnLkwG56Qk3GifT1aegUC6yJPmKeAJyc2ySZbDGA18VvVZV2KkwS5ZbVRwFE8CrMSJs6DPu2Apnjos",
  "key29": "64tydKB91vEaJWQwRes9EZ2XtdvTKxHsmvK9Ueov3Fya3tjGSxBwNL6suGrKfHVGfk22K1KR115JSvdtyVxTZyk3",
  "key30": "uYh18df8habDby1qgZBva3KVyBRUcrAVyTT7vekagdFd99GHZcGdz8qhjp271S8pAbgKX2vWLDZ8xTLnbvkLkFn",
  "key31": "3x8rrpDjqLWMyjiv4Wmr44SFs4JSUgjPWykCKbx26wHyQzGCGKiGHZj9D1VQD1c97P3rwENzwghJ3spgXseNSwTq",
  "key32": "42bsTBKag9PZ8BveijjKrvzZPyUZUdXaQYwnEAoFRzPd1XHViCuhLn2Pf4niJwdYGHptHJWMfWn1K2nvh5ZWjKbo",
  "key33": "4gz6ksigPFQiamXHqm6Yo81wgKDjyxsXnChEeSKLpcDX4w1fumhw6pjZYnxLi7WKDs9uAiZMbXbFWKnW9HrRUjR7",
  "key34": "4nu29iyf2qo1xCbmE9cAN1VXqDvPvfatwyeD6QJXozVGi2EErx5nMLYuMw1CLruafHqANuhwBV7jHaoLKmZFNvvv",
  "key35": "2iwyLdEEqF9w3V1symTkMs1UDHcMnaAXd6mWpStm6DkxEdExfo7y8BjLP4RZrYeb8PQerPk1jB6D4EgZxu5pNZJr",
  "key36": "bLbX7tHTny1hTT2B48wLkJqbTaqo2Ltto88X4DbUQQEAUdbQCBN2PN7Uj1DkRTyPZgVU66vQ5JCh7QzbvMbSk2f",
  "key37": "4Zeg7CNqz8ioHRkhYdSMntCPcayR9R5zhU4JR4nRv92or4hDGkModNEw626c3QxtqsjNnPuT7xVGHJ81L76JnKE8",
  "key38": "2xgD72g1H6CDGP7ohXrQfLwBQmaFrqrsu63cBSMdEJLZ5AFdjY3ChNF1dfqXFYWXi51eCYoVh4Y2fN7VrCJ6deg4",
  "key39": "2E6iTPL2smcpnC6sjfV63TTsr11UA2AqvuiTcrFKSFQuM9Eq1wwbon68cMZt21ey2xjUprPcmcikc5WYbzfH6XxC",
  "key40": "5skKt9xx5fcmZcPsyx4rQovBn5iFBWggVw4S9dVeKmLANBQKDNyjW65uiFpAq1j2L7xBvtTHL4Fw7vmAfs8dbngX",
  "key41": "5mqPJ2a2NE96KVgoYdeLFWWP7qnDNtZEpdFGxR1qpiEW1TTGhgujxLiY87LNcZkKCuGsozUVh9x4cAD1bNQ9BJyt",
  "key42": "5XYStA6kErxpvymqb3StSqkdeYxPLgztPDfJkUm89T58bzpEM11P69a4C7pdqLqw8XzaNJeETyFd99qxNgdiryZ2"
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
