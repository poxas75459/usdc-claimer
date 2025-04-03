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
    "3bCXuAe9UmQhJGrMfy14kPB1FHQyFHXPNNJePmJcGfMdFDqbN98htTUudvS9swxmTW48SSnm5MSPpSBSFazdHXaz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xLcRrmMLEMuMoLG72SoYsMSb5taKVVJSyJzgniq182zbn5H3K2HmRaHDuLx5AapfwBqsTieGBfxxFaHcSaHjfSj",
  "key1": "42VrdJQ1mmbN6Q1vqaUnpvWbhnvvgdqPznZ5RRZxyFogPRF3tSrsYQH9FPaG7eVkWdg4ZptPuD1cBifEQh3ZaLGN",
  "key2": "3e8fdDcdAEv6p5c4vPu22e1UB278o7E9bY7vQ8oYA6UMS5g7JD4w3ebJxbbUDcS4nVPMmAHRjUvwSTriPx6dZcjS",
  "key3": "xvNTjpTyhhVy4CfcjSyV6PfUNXeJtWePcowHdmZqEv1Se6i9jDhATzXnNotnogQjaoPukJSApSk8UssbnYc2xiL",
  "key4": "5gf6r651To4RqWQe7hiG5LAnuf4kJy3RjACiuR9btXWU7mBJA7KUkCHsmbJj2iZLmGPm93WZXAkjzrHWN1YhkCKY",
  "key5": "4THLQqY1FxhC41rH3sTcdmF4CqmbDdi7ZXsivL2ewUhF2sej3HfgniPCSBs5k7QbaJtEvyJN6cKFfvZfGLhg2W8T",
  "key6": "3asc5sMSy9hzwGs6afaqiYPWnddvmP1Kz7vEqcH9uRtc4wz7cJ8oh9P3tRJ7yAmdZuz2qq2XVdLrdzRS3oDAkS1H",
  "key7": "4HjFEv1gDCR6LdQNTnbQ21q5vZ1Re2ktqS2XiJ2nefWbJJ597g8zPdSKbgNaaKgTUePJwVspELX5f6bEqD9yf2G1",
  "key8": "SrQnL92ggRfiFdjXFGhHge2FoNKZEEdgyQCRoWA3QbUrJu51MGRUokMD1L8cyJpVKw7dVE4AFxRLcQgYwrtDmBM",
  "key9": "4ZhxZMWVwQuUzYSR1VTzTLFagczYeCTx1Nc8vEkRJCYZda14kcSQhFRCfuUvtFqn7fq7iH78NtjnHGSPe9MvrsyF",
  "key10": "3Ah7SX3vfiQGuA8RXjsNdY46gw3CBnSdEjVddhjvvDGN2akTqZtADfurFv225KVM6dPuBr1zSgeHLFGDmG8mQk8i",
  "key11": "4UxbkA6QAibxEh15w8L3gULzMAYddV2wuVnow1MhMpAhBk4xs9CxyG12YPLWzPjP8uMwwKWZTWtQSyDAtenPAjpu",
  "key12": "2PzDQ2eV43mmvJGxzQPtnx4RKNCK2CBeghtGpea1YjR1zCa2RcUmeDaTKhz9vUZGQd3Ni2xZ9GTpwBqHYAqAEUBQ",
  "key13": "4sSUrGy6LUNzxRrYe8KhdF2pDLnFPDbXstHmcYBCLJijqsYaA2dAEv1NEwSL5uWcW7yxaPrLvxmHFELaLx7t61KR",
  "key14": "5cCLMFEvVGijPmfGtkkrmQfffqkgTod8EMqLy2dn8D26SrgdMbMda2bQzef5KU9uztv5qrvGfMXPkCCHeaF6o5kX",
  "key15": "2udwV7JQu9bkRg77npFp9ycuMPPywuZDPuNb5X141fZACC63Q7NowszhH4Sm4qoVRzsc3JcoY6JDzmMuFu5M1xRT",
  "key16": "4gk13xjDwJTTzVFpp6j8ykv7Dd3KKKqYVMVwL7mf7HFr9jCJoSiNiZFoWmSFihiVS6EDpDEdSUoaAkZzcknNGcwm",
  "key17": "3j3LLZ1Z99uivcc1ewQ5xCbzwyWVDpdPysGAgXqKi6JW9aeay3yvBNRRNqV76gUq189cJUkps3MYpNZxJPZYnWfE",
  "key18": "3BoVug4tEAtPEP8CNsQ9NSHuceMJkyiFy2ZpgVXvw9ekqg9YrHGd6VKdmiCVKt1yR7nfLRN6g3DsB5U6ynnKQnqN",
  "key19": "3aDAcot8Tziiy7h7sLjKgmZsrgJPVDQ8VAWEV8EsgPpGgP7brme6rwDmM9NirDg939wDFTRoCy53zSP2PqDDXNde",
  "key20": "5x8PFNxLiCo2eVwLpmE5pQndWQWtZzMfwyWiDGEgeftqTRKEPUUpGbu99HMyrLeScEJXvvqkgVGq8wksG7t2f69x",
  "key21": "5hmSHQARBv3MyJTW2WvVpcHnRp4vmQd6LHjvgzEUUuxwndsf9ufvxpfQEagYJwd1674xn5CaGZ4GCUPksu5yXn1J",
  "key22": "3g28ffc4GbwfqePynk5ZWWb9p6wD4JRBTNrYN83WivjJuEeP5asc9how2VQgRyvcGGSKqruv5EPuaWV8jt2Zntrv",
  "key23": "3NuJNoeYJdKpcsFH3LU3LQqxcRQhVidDDXVvNkBR1pVGmHcQEbYK3Hj5iFV8eUovRYpmykB7Ctt684Nf3KZhZFMu",
  "key24": "2xvpBcPDKSUJt43AHxjXc9XdieqRRLiPXpYKMekzyRHm2sJuL3MwgT6hvsPka8SMGKgKDcbW5LtagUSbMVLanqAr",
  "key25": "36shRDiyLhwb2EevgyWTXa84qHHQq6TxDdAjVmgVogsri4b8Z1E85oSDwZHS1B1CJniNv3aCxbf6ari3rvk8k4aB",
  "key26": "3tKFb43Bg7EaeyuPSE1632zD6a4X1CmYiz1yQXRdYBYCLjd3DQoU7fwyhvzF1n8oXjvnkgtgzyGhiBsTeTCMP1tn",
  "key27": "5sCLP4EcRVNkZtCJhqSe4D7wdVMS75VD3jgbXBrxMCAzRGmaTFCPSchnkweUyLrbJxn5K3Hd4esN4QsryMzV2BUR",
  "key28": "4wwFrmw4cP6CbvgpsudQKMgZAMKG1rvm3eZvP9aBfRsztTLc68ByUv87d9peHwtAQSseEhBQN5NkGd5v311Jn5Z9",
  "key29": "2Go7mnMvhyLEQMXiCRPrMwMiywprmhYoDqaRibJz91iPoHNcKh6y3GS7XGsnk37Wqh495YQ14XjQCjbH69GrAKZ4",
  "key30": "1aEp3xcQatNbSPfjazaSYr3RzhtcpZ6a59ve8y1y2bAYL9abfxN6YVfhjW4YzJGoFK9iXcCKAQrGr9rdQnQcvwQ",
  "key31": "NMiqQ6WieuZ6P28irpd1NZy3HASZJu4rXmRkpTZuySwUV3cbr2p8jaJotg8AMWdRpTsBNXMisH5PFwqT9N4F5Za",
  "key32": "5QVUJqrEX2WjsvFu599Xz4GxHPysoc3gcJmywpqnrFmpQPtWVsjWK3Rhh7xsVEDysxHZ3QyB5qLUE97emdK2UqNB",
  "key33": "2yzypsYVgeDqPuxGjutkRhyVBYmhCnuh48UaYyVLyScm1PCo1byxeDU5yA489oTupiS5ummUWiupWBRL93yJQ45b"
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
