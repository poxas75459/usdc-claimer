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
    "259eqvWY728ntTZQUjfDBrKYeN9wufPKXkEJfG7iFKnWMfaQhf6QN7rAKJ29AMunacmssUKf9mNnhkXNN3zYQRdK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5G3MGnV6arv6FssK9an26xU1Bpr3FeNeqeMaN4b5i6DMHzFTanZ4cHkfBZKBibwzR81TmeW8vrdBixPD9Fy5jNqB",
  "key1": "3YZoHj39zEzCyGDZdwzZr2G3FMBsxi2NZMocE7h5VSfF9t2JkQcWYEL81uDrQjHB2mkVWo6wvuQopqCUNPUGXFG",
  "key2": "3XuokfKAYvige5mvnbVjEKRPhSdxEx2tRsRpnnvChznauoE6sbPh8DVKze4cneLPhiQJ9jkHZTCWa93MLigc8SBt",
  "key3": "GaS63WpBh8Y5kSDyg3KnZunU6XYovyvsYbbdcKp17MDGbXA4waeCPtjEi9pivhAWNZpN1jQ3YR2kFMGRiX26Vj2",
  "key4": "3oyHe896MxRTQc3XmYBDdjjxTeMQohps1Li2fKrdbkt13mtK4drq7MqgeYCGg1jMMEC87Aumzxbv7ipdBbjdmV4F",
  "key5": "33qcUgFVKPqsWNLEQNnA8NpCd6i1RvLhZ3cpiz9ZyTEX3tc7QogvuYdUyAUYturPe1786n4VTicXqWLbZFsMbUi2",
  "key6": "2qL7kyhYWrSMjamWoYm4x1kz1UsjAjYdCBNeg2ZTTV2rF9bv1YqQNqA1XZyTgoHxvmkNieGn2UeSkgAiRbSzKupN",
  "key7": "4VRXUYJEQ7t4MyDFPWPPpAFr5kVBQPCzFfWESaiMtUx4H25zfsy9YCmujZWoR9Xbvjd5ukudjFEzrcEnD3AezMJM",
  "key8": "KBCY5Pgv23x6Zew796PiBQLqeyPP6t41QC3cmvxyP7vvwZYRYwWuxKmjpfXXZTzGBt9fqs8KvSB2V4p9hRx43Z6",
  "key9": "5BhuY9wgUN8cwz1iWeEPLiiLMLNixgsGbjRWkBVeQQK8EVLmzZx7DzFTyF6GCiXjGF13ZFeAissDhK9wPZs2PkmK",
  "key10": "33QUaR2mjaGeGaGrpoQozhthuAyrPUhfqo8MAziT9NY4kypaCDaRWg4sWKh56nH8TXZpfh3rVbwgW8KYX28EoqxT",
  "key11": "54uwecN4Y1esWxJhsC6aDBMpirqxsqcVaE5UGyEKJrHWEADqGA9KxKhHYP5B1ZaimPPdRj9cjwjKVuvGdaC47kuq",
  "key12": "5jcfCxTCxTV55t9XFXMZ1qUy7fs5uTigzALt7tJYRFbY4qUAt45g8JZbXsr6ZAAgot8NvC1LyJUsx5VC3auAzXAJ",
  "key13": "5pnmK4rkYPN64o3MThXENHrmknsk1fCYhF9GHVXnZJd3mnyTA7VW7eJ75N2vJmo7aP4cXwY5pECPB52CZ8iqFFjb",
  "key14": "2RYA9qKCZvLTzLizttrfAgiMewd9WLMUseZokMRtrgjEUDE8ZtNc4RD8gM4qs2Vr9GmzjXyZwZ4hfmixxpnTS4zK",
  "key15": "1RKATtiafJXgBgcZppAtvvxcCc1egszkHQeP9576ZFJBmrZU3E5WZbLZ3usVigvBxwyjXTRKsNCzzwNqy5GhArt",
  "key16": "cuPU6wymxh914MmEbmDzBJ4Pyb25t2bfLvkddEXNwU7fyg1T8Tp8j5tqY5yYtZ4tKRmSJLAn2CWQx1khLyJW9Xy",
  "key17": "3s7hU13js2aDGUv9XQTQToL6Wv4phZkor1iLrWxhq4D5jCC9Aj2zJeDs2iGPq3tmbbjnE9FJBSUknD7N7NTArL9R",
  "key18": "24WRUeTDst68n6FjfTKrhXkaJGfBmEuvS9dKw4YC95kx91mqH4btNBeocJDiMWLMH5Sgau5HZnLoDhCdMSLoHCdG",
  "key19": "2D65KWVUgtcVNdaD89F265KND3UWLJU7xW5wGekSP8Vjm5ijwJn1vRdndz5g1BsBqbhrEyM2ozhWYXMELH9jwRS",
  "key20": "3Rszj7ox5xHSq58dMiQHqgDGNifJva8iLMLJanfeHMMGoYsZi5qDhfLcjsJBgF9s7y97bLwwVW8YRduMDYJDbX5v",
  "key21": "2PbeF4vASjavUDgdvuEL5TVXo6sc5iAaAyEQAWobqr61trEm9XW4af3AXKNnGkbvHJ5JTpoMbchNv84F7Gbg4Mvk",
  "key22": "4ML1e4hU6Q8kqBkdsdxsqVwTNygfbLdFrTvMLSoWJV85cPpPoJ26KWtWeT6kU9KhuyQSWAFh9bur1ZJN9Fmy6DFN",
  "key23": "2TejLrTLXAU7Y3E1GgQdCdzuktfXoyGHAZdzw16u7RkXWGrkRZYvLZnP4Y6x7EC6RegBjWxmc3e2HT1p1RY41GrF",
  "key24": "UHx2YSeiWCa2MeNm6UnarEqXA97LKkuiYFzi9QPRiKKVkDZ6xWzooutPvFfCAjnb8ztUKdGpumsfatgJRKQkpbU",
  "key25": "58Qdme72g7VvKmxuw31ubaU4iH2mqA4JntYMrjYxRtcDY941pDueHNutpT6wAgmzniKC6n33QKBv1KH1istbbJAg",
  "key26": "2gUtNjXh8bU93Q94RgYAQQs2wxEgMdA5PseMHZ7uKmW52WHhNV8WsMorLXWzi1oxXEESF3pQUx3Qj5ynXDmJ48g2",
  "key27": "5uECB2PHjg9Z5VriySt985JcDe5gCCMqp1557HHPxRKBJ8W1NZgg516vRwqTfQ8snFMVTSu31xZvtJKeCVCNFscQ",
  "key28": "4yk2zLzczVScmk78hxehd2LFNdRegnPCga8NbiBwpdSDWgcBr8ztVWmLBZHcVTgkhdjDXjizap1F92PyxKNgrWp4",
  "key29": "5qNfrTrEZFUGLSjfxzRh5yngcg4j5MwuZKecXfndKMkdCrTAPpzNWJWhLGu51yDhpH7KneFYGXfEiU15xmmGtk1b",
  "key30": "3x9PqoVPQU4iFx5KFFX5NQA8BUrT1minR11sN3FmZvHpnb5ZjyZCFzGt8yQwZons4B2R1syLsDYwjCTs27CzLris",
  "key31": "KMJDABZ9RBCxneqa6HSHSn7qWrBcrRvEQyfVQpEw4M6sEXnmpBVBaf7ahB3ahi8cT6zsnfgff75qJdsoHfwsbob",
  "key32": "5DtcWvhLnAuG1BfwSNhrmjPNbX2PUk38hoxuM1cauuEP7ucWRzSKUrsphLQLgZSHRjUpHc6NP9wbCHoBUgx1GePH",
  "key33": "36yYxvKsvzchQmgSWnZzFLSU1cHBYRiS8y2cS3oGkKGtSutzXRgt7sPwezHf2msKPXpoDijd3j8wPWsYvUVTn7ri",
  "key34": "28djLaznEfU1kRwDL5oR4EvsKoxTcoJjuRaFEsk446W4ifJ3fexe4nngFjKUDZyvW1Xm1kdwj6Ryb3Fp6B47CrJe",
  "key35": "5T76UVHYk9B47GYN8L8TbT9gb7x7HZQCq3oiw52rPqzJwaFGdyNTQVWrf6rerB6vutcCXhAv8FJpPtZXhYubqzSM",
  "key36": "V58Ucw7qgigzeDYS5dagFYVhacMMqjAifdK1VFCBqWSCCzicaThLSArp617MoFGuxHgBWg37gpRmh5Ne8CdB9vF",
  "key37": "3NYVvmY1MxhF5mKt3XqYBRiaVyw6Gu4jyfgRC4FyywtJZQKTu8M6H1HXwoPRmDGq57mE85Rfw3jDzMJ4YufkUrJV",
  "key38": "4Ha9Av3XkEpBaJHtmHeDD4QQ7pGPmYnfQrpv9KG1SirQkGRQ2Bwt3MkCDYttiQiJ6jpmB56bXticEp7q98oMHr2o"
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
