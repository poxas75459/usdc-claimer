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
    "snBcsxeNWauyQ9dhjvptqsj2EzFS2iChtRYqsMvMq2ucie2nGGrJ95wKL5dqBy4nfjazqLmTc9e43wmzAD639Zj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FwviKC2n3By9Y9EopDpNzXvhU9YQtR5mKDH2xAPhbXycvRwWZpHoF8jAkEfBBpnzCoVnQ1wyVfDCVeCLJ7eZsjS",
  "key1": "3kpbGdFwGKfTFZpxFPKFqM7sHRQkZrZtpQWPWKgK7HHbH8h5Q1rRmXR3vkQPznfhLQBkpJkC7uR5QDLDdPaGPeqK",
  "key2": "5C7xTsJcaomEhFyVkc7UrvZLEf6SbJDcG8vGM16HkRguchv4R5AuUCvBDTSqCubfnzij371oP7vfZfxjmYGEYegS",
  "key3": "vnwqEnYoGd9j2UGRJcsQbSzByyrzL1cmKa5LM2HbfyMMLtjR4ZY3C2q3cdXYu4Eu4eLWWQ99qNWGjRk45LX2sxM",
  "key4": "5H2GwjX2rjH19Qz96t5h6Jvuh5rtn6KA93RmLAjbytxBjk7wQvDChNSe4H1YfUR9K6zz71VUmYYzcErhVV43BvB3",
  "key5": "QFzr3MbQisbPLPuY52JWNoBEMJHfwTL31jfpJFf9skprcV2H28aXdB2hSr8m2AKwLFpmVvhU5vPvgixWRVAMiSe",
  "key6": "2W6AcMiBNZqWZqk1hhcNMYpfMke52pRud1wyiU1j15noMzoudEgNbCoSqj5yh8pjcDLEC2s32ReS77mcWt68ADgD",
  "key7": "xXSjKhfSuNC4GLZjr6bWTEB7r5VM5pc2tCbqhePx1qH7yoAu7Pfh7UwBQdA37DpvezsXszg7EYR2sjTFeZS2F8m",
  "key8": "3XTXqKJswM6u9Q25TdCCYhGwV7sUZTqHf6K1Dp9Qdp2Num4nboAKtjJTqyXXUZ69LVWcikngURYF8io596669ePQ",
  "key9": "2dHLj4ybJ5PTjjKKgS526wYFGeN312LBU228WnAbDDDVRabaNoHZv33w1u7YCpBLEJGAb3SdaVTXFc4g9tNBA4zU",
  "key10": "5wCAoPB3zz8zRQM3MxXQ577pTTMA57nAUbbFpRS1PZyfSRqC3dFuU7oiS9vdsW6ajLziQXqTPNQdq7dqaLKB3Rsa",
  "key11": "2GZYgwj3nofiQJLLK44yYY9PyutWQ2i2NUoprDP9DRjtoKU3QfcBd2YUd6UnNwqoAjYhT24F21TYdW1wgezydpUv",
  "key12": "5uKSMCaHT1tNTEStL7vbAgvnCFtHSpTaUWvZe4j9imQjFpy29NbfsGQSDsnMbGJnJzGoDbiPgpgcBhukHmsjTBPX",
  "key13": "2Sx5AEscRhXK1vmNLdf1RhWYfie9YJM5JHXPWnp97gBPwC3tbbZakgrMQ7dzbcEb7rkYK7xe6JwQAjnA2D6Grs1d",
  "key14": "3DN984n7puJTBnVT5rtNM4VSpuwFLSZ6yez5CnQYbLVC7MJTxLYPi3QhejWxDdqjTxEVwzTKCgDPiYemSSfK6gTD",
  "key15": "28QnaPbE9jyz23PVXPLLB5LG4Bexzor5JnJFxt1igh9FAuJEXtVBSLYSMjT1jW7s2WjEdnAft3gHdWzokMWyqDuj",
  "key16": "5kVhwDTRAmdEcGXqxTykH9wzVCJNjmX3gjnwSBK6ZB3nQUjkMHBrh54AZCBW1qVbwyv23ov31hHhPmC4rvkVTcmx",
  "key17": "35Gpm4XjNzLUFLpvue3mTWuWXVMAg9KYC525Wnp5kpemfUoNWXRh5eme9H32RaUSETedbjkBytQonpuyBdPd1ewh",
  "key18": "5kYewWa8MkZZt9kqWtfVXS66e6c7NNAznhdrjxMVRxkXutSgHpj1m2UWCm8hiBQN5hdqRAbzCrJCn2LLtbFrW3C2",
  "key19": "3N1piwy29gEYbuxTpEPq2wPF6BoZYPvDpozgug6rtkSnY5XtifBRG774yar9NsPWEiY3kf974nTjSETyC9LePGpx",
  "key20": "4k7pwLygYPR7kwzCZWqXMD4CJ1eA7gmGU1YjC1oiTkoovpYPcvBSd57QXCdahg3PbhYKHGRDFrZPKRVop4nuwknb",
  "key21": "5PkNH1EF1BeFe1AebicJta4FAkp6LfcsdEYSFToavnti5iL11UrNdpCiWTjkBUm91LWhTNutoReE1cxsJzidDfJp",
  "key22": "3jHcJPY1JEzRDRFsQDhqxqU3pgeufDdyT3aATNL9KxXsxfV3wuFwdVnqDVFSW1JQeTJsZt258QGHqZ6PsanMViMD",
  "key23": "573FCYqTvWrFBo1pZNbJvr52Y7NhwsUepmHgPCMUwcD5VHQs2Tjd8A5XKuGk7FFu6EJ7LhbMrkqnFbzoEXDif2nJ",
  "key24": "4JrAZ4faz5EBXEz3borR35JmyiJFhrzhg6w7kQe7NRZaeL4wiqsGdvRroXzTW9aJffw53BXeRkW8KkbrWwomDRxG",
  "key25": "2mmmFNPgKBmeDCvP8hS2gy61gzxNiAbK4pJK5rifFPsk3zJRVDKXcdq8UhiL2QQR6CJEgE1NVMtapyoDSW6kEUxt",
  "key26": "5zmy4f9LJTmtd1hCd7uiPg1xsi33XXfigjGSgpDSThQHVKT7kWvFCfTbYLLCnsX76aWivqLFisHMKzwW3WvdSe8o",
  "key27": "bpxihphwBiS8CAeznzhDCjiSBnn6VsvDy52pTKweZgdcUB6H4ij5nT5nAXAKTNVrTpPXBJCm5GDg11Uuv6g9fjH",
  "key28": "5pfC5ynVsgSUrhg7LTCV1UZ4hgEtc4ANm92GmPv26aW3xkHFxkwevUKkTmVYguPLXe64A9Q8PBgrLZaqigzdYwZE",
  "key29": "362vkpAFPpmLbrE7dhWLYRCErW4jiuwZuMQgAX5b1XvR5MS6ejoHSpVHWhHKsrMJ3h6SwbXSx84fFZrn4PXr4dmj",
  "key30": "26Z2eiUoS3bXhRJ1W6TT41Q4DWMsBqMs4ZsgvmDnLpVAz8Sj6B41tZMpzuPFrdYR4FLoLLhc4QbyE8ETHL1W6faW",
  "key31": "2DzdVUfTdKqhRSFh9oiEnn2YYKq4Gvinhy52BJ93FWDqiNeDNYassLcb5jyERE48pz3EJegmEtu3GinLvqruUkX3",
  "key32": "4Xje2bugT5Erx3vRYfcs8d77aX4as4kJ5WXGztqLe1kx3Asxb643c3szvtCcQSsYub9X5bWuTr4nPRoDf2donNjo"
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
