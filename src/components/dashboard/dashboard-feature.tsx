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
    "2Btgx2bLndhkEX2W8xFvJYPs77wYCSv824ztCse15abLqzBQhgF4uK6oKdHThb2oPXaPbfEcWv9R5Ar5mwtAyQ9V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3P4rw7TxRmPJiGBRLzsM9W5dvnpQTQRhpBiJgBGfeM7TqXxSJsEJj8DZt7f7mhtqh39dHo5ubwBUJmSGEWrHtCqq",
  "key1": "4WQvGywRmhL7d94PzcYM6R4zxbgeh2eXaivRUva9bGuyEfs5KPq1auwYf8WhAdY4xX871KE347mZUzLRuo28Ygfg",
  "key2": "QaFYMhyokFS5byjm5GMvBF398WfwQRHgqHpDm1SuCQB45ZvrmaKFqRnFnX4MJjtpr3ySsisrz5792TCVn79hi8c",
  "key3": "54CYVnKF5CmfFPwaCjoZnpqE51Uz7Jeq3trnxXfxah3p2ynEhjkXnyCRVyAiFKftf7J1FLT57TMf76Jp63haLANu",
  "key4": "5Rq8Dy2ikSdjjfnwaXdQTxgdiEJbGAp7je2cw4SwXcGdMnmCoEi8j9ayCj7hjSg5ECGCRA9asnADyzisnYojw71c",
  "key5": "5g6nh5F5VgMW7uX1ZwumQ6RgFV7egPvNZ9sEfaagRrM4b3Mi2WR3gNhjA4PPRUxARS4WiERWSG2UnyeeAK1a3eJt",
  "key6": "3KZvgdHkScKgC5y9tTHB7aUPNf7fbTDoXqh84nvyJaiR2bS9qF6D9tgswHRjuwoBqReAbUYMTZ9nFpw3x4P5K1PW",
  "key7": "4WKs9713vZ5ujf6YLde5EQCanxVyXjsd5S1Pfv7cLTpMPWFmz9fw78fv38gUZmEqCZvgGDimEcNcNCb3PoURyjxV",
  "key8": "wDB1QVQ5YLzAxf8zmju6RWRCCwNcwFc7zbTrat5TLr79Wzz1Ddjt8ZPwE3yNuPBmQLUK3vRD87pKmRoKkuGCEGD",
  "key9": "3yXxo9DrjXmWrtzAgUisNYbjPjmeWdxNq2rRKpeeoDcmaAGExFySUZVwhZnrJsTsZMatQKiK7H9B1LZCxACYcgsm",
  "key10": "kmi7L7URCdgNojZT1gkdpnfsM4ZN4njmHDXXqKS64X28a23Vd4Laqb6B7p3QkirxRtHtystiovwgJKV9zF5TRwJ",
  "key11": "sXVmQsqQq5BCviftvbzpTr982h3xFXQNP39t1iUr8gL5PZgGQc9DFcwVC5TBLCyUrzYw9SWcNj5LLC89HNAFueS",
  "key12": "2LZgJtpZ7fuY7uBxXtF5hsGAN7hAoepNVcEihD6UW11r2ntm57XN3ZmYH61ip36Vu9THzGEjPRLKAtgu7wt4CgGG",
  "key13": "39VbZA83QhouML9MqQkV8ghkgVnajQCXvcPw3zyJnYBzeFNZJ59A9XXWQWNoXNtyNiT8i869RKNDkWdFRno9dDMN",
  "key14": "576poEkGyEnUZpYMcdTzQdFDkcL28Ju1FPqqcrKtENEZv5kzJV1HCPpvc1t4CVkvqPRUWmoCEFSJfHiC17q9keXu",
  "key15": "bj6J2WTqBWzuXrorHj9Tsu9R1DYFAabv9MawcuJ4JpwS21tRQE4VRLs47zL9oiuFT831pUEnubTTxCYHLmKoTd3",
  "key16": "4rSmtQksxLxNNPsUqbGcS8cL9u3xykjZQb8dU559Qu7JYEQUz4HJGyD4UmRJRdbn3bLFS66yQWCUvc8u7R8pHEC1",
  "key17": "5WPWDnVLv5BFmR1i5XqGguEvabYRMCRgDFwmnGnmL2vmisTXGNAi2WFzoHkF5F9xGGco8Ybj77fxU9x71Sea8d1J",
  "key18": "4PtUxJu1HFocBxvKccEvVanPQhAqyFLbDRe6rTekL3T1ZJUAFk5h1r9Cn8aiX6KqDuhMrUtkf27uwHaegMVTF8aM",
  "key19": "2M871jCywDNwuRD2d4PXGwj6yfy15FrNEyKBujkQSsuLHb8KR7Ki7FUVf4yoCUsksQzv6yXLSvxenhsbQAkDq2qY",
  "key20": "x9accKDEM1nnaQ4kN2UCuwBmK9ooz8VenW4u8bUcXfkJeYq5Y72cAtj6ZCvyoQ6K59eFBuqY5NBfq72MXEd4tFw",
  "key21": "8Umch8R3GELMadJRD26TKCBze1pumy8vdeB6oFWLh1NGHZ2se7eukq9hjKSAMxsa2PMhvpnrVENDfAbQEDBQsDn",
  "key22": "2iVAPYjAJLUyiGLYJnH89MpyCtXBGY5xCEUGubQC2j3gWdJAamz1rWLgtBpEB57ENrK1Hwz4uJ5c5nqGAue3w3rM",
  "key23": "57oMrtrzxKeN5Lh9sVFWgRqa4GFhL1Wkhi83osypemHbnSu715S84jw1eZhzMgujgJTVdNWqMt6yr65VdW7dMgcS",
  "key24": "4BiGntc73RS6eraPEH99PDJpiv2SXydYUmSHaZ8YkPWpaVbxeYAM4NviP9RgnqKm6AGySamdjGf7Aeo7yuLoLNxx",
  "key25": "2xYCX6fthdkm4zLZtngePYMSj4QT1L9jfmAAEqH6jewR3nbDJN45ZTgHmEd3WZe2KfAtq3VjfrCxJcds8ESA6ndF",
  "key26": "p4iBWBWMkv6tTXKs3yvrGYicMsxtttu2S61vYps8Sjh8BGju3SVhU1hDGWBfs4k9xfzGPerLizh7jmoVVx5ez6w",
  "key27": "3wntJnnuN8ZHQY8B7TQ3Jt9qgPBr7b47gL2rgLjCn8GkZisBYfTizd1i73UEsQhsPBishaEghjVrtuY3Dh1vvS5m",
  "key28": "QHZAZKuHfqijGKbK9widisS6hpT6z4tv8TYiRK9XQY95W2sLXWjNRLCCr7Z5sGMQa4aYHoLcSxRnuMGsjJS8kWb",
  "key29": "S2Qpg6Byw2KjTdhoQqyn5ur7NQtCp3raauEdaaKPUSJ3vcxFnpWS3XqAd8EUcJ8MnsphWKjLQh1yREh37RuEkxS",
  "key30": "ZJLcrfXz7L6c15qAvaWEqfLTWbUzHRtrcVBjFyyGyBwLBhewuEERqiy4AjpyLQfW5XzXKMHMZPRbEN2ysF1ozUY",
  "key31": "2jKLKBwSPRpG2bPDeK3ZdrhYmptjV5i87F7SsefdXaSr5iCiiq5UuvTnB1v4NCiti8ms2qH2EY64kHWQjo6QYNyo",
  "key32": "3EtgB3nPNGuRSazygWcyvqsgppdbaAuHxfiS5tGLAfRMDGJaUAJTtythrDrrajAGZShh3tnvmi8BgWjepccaVUBF",
  "key33": "2imcBAYdPs7QxctyUcbQMFCv1Ue7A8e8XfPNR94x1MXNy2pQD6aSr6u5kxuvmnt52M24d97HBeoE2mCmDVmzCD33",
  "key34": "5AgR5p5ZiRKHXHW3om5Qmi2rTCVDw4jZRjYfJD3BpiwWnnCFKHUiKHhopPBTwhaChfHU8DxjT3EXbqzxEARzZubw",
  "key35": "3Did5rYmsPGfhKrVqXDbKtQz5XXA4RqUXYbsD1k2TDiu3VJdfGEoA7YBWaBeGmvUQmvC6LmyxYAcpaXUs5m7Xge5",
  "key36": "24BHbaDAs7eo4cvv4GGVig4jGQzZeARbQrnPEDvVVwYfCCmKyFCNTtAmMV8KRw87BVHw9vTdc3N6D1ngbhCTFY5s",
  "key37": "5RETSf6PSpYHcm6wQhYEKZuWeYiMh1nKoikTLy9LYy2LgUvUGM7kQDLDv4u94jCuDLuLQSzHEnEBWqq1Z1dPVPM",
  "key38": "4xdwkuSZbYJaRwQgcbDCCzVVo5aaqQ1rcSPBBfBxcTQGxzdVCQJ9bWzizvq33ev3b3K7U3HdDKHt6Le8iucTJZgM",
  "key39": "dMyudD4zFrw652rWC6GhMQnjEKdLJLN25yWagX7ZFFeiTwzw6ixdUwu3RJ88LL6Dmp3dDxuCbGpdEAZrworbQZS",
  "key40": "35G8srXALcH1hXYAwEZ2Q8YyNjnGn9chrU8Ycw7MnUs1tfeQeMjjuvis8CmeS3Wewe9tKEpoBssKbk541vrkBaEo",
  "key41": "2C3wUXv8aouMybrVwhCXX5y4XiusPczXeMikLUUWcmw7W6Qg2FaccawjqAYXF4FYvFPKM4t3DgJ8D7qhaLToQLhW",
  "key42": "5L4drN84v49spryRtN4AkvGDYEGza1sqHtJ7yxPvGXRAPRe9YukCtef9RovoJhKhXh3fJuwgoXdDz4eC1XRFCtDd",
  "key43": "5kZSHhLcpJNHs9TvRiwEdUCwayNPXSNLrAAaEzAZWhjTtPdKuCDLP5Xyt1s96bYxwME9n2VJnqEQLXfERhXTc3GK",
  "key44": "2JgxUbY4DzaRhL3nTd9Z7AHGYLSvCGbkSkfe5ddjciRN2ehDpYFLy4ne6HHiDrwCBSYNSJLMNvqpNHR3nwhC37Qa",
  "key45": "2Kn71NwmqVZXP2CXPiECZkSfc86C1D2m7hmSN5e4smFBFNPKNJEt5HePrMGauHJEiGvGdXtfbucBVHRRUVaosnwA",
  "key46": "2BVnwAz3qc9o9WbNAea61pKq2KV94VeeZ5QYXUjTQ8P32MJZDnQPdcGKqgHu62JBrjH8Avxoee4G4a55PdTdTfyD",
  "key47": "3igTdi96YFAWyLn3qhYq7qyYE6BQNb5NWeUrDXMDusTNswuTsjD38nLGJteDRxxj7Arnr1vbZAtXKWYBVcZTaaTE",
  "key48": "9BszixRxCJ8gZVHUd2a8QRsXi7tGTtHu8hLSNJLZw7PFpoySecK1ec9g5YdNjcTXbH3UftcbDhAWrt6nPbdt7uP"
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
