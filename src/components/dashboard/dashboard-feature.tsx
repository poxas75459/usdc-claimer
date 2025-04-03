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
    "5axi6gV1xisoLRPTzS11DXMmCNG85FAfBGoXbDBxnog4XG8nvBGhoE7hoKxVw5gkS3yWSG8vU9Vu5zkwwNTc7RER"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fdpuiAeMrbLAGkgWxTf3fG7nHyFP2oMhAszuuyGqMgdPDd8fj8WPbgeRrJTgAgiGBoPxmamZ42hX56gfxVV5oiU",
  "key1": "5zJLzc6KgyEy9wiVYZ1cXubGvB9AwdxZyQBhGgrUhBFG81v4c9pGgrVEzvt8iunnqQug62qDeH8k1qCQKGnzETXD",
  "key2": "DVxirRYE3xdnqm9g4hhGc3xweSynZsDCJBPUedHBQtx8j8wUscM1w6BHt8bLEMtmXPTA1eGj9qqBFFBMpd4rB2L",
  "key3": "r2SoLdXtyZYqKBt9Ve6cxzaqZ32B2sikUC4oRpi4Yx8fT66ffo6729zs7BpD6QuNbJFrDSrQCssecMTSfp2QwhB",
  "key4": "5YEoNzCQPnNyH3ot1DCzrD2HZ5bYTBTyZqdmF2cjyZeFr6VDC68M3Qj8XUKNTd6Hg9fCi8htVZuMa8U3Pe8XiVmf",
  "key5": "4hrPeTDeTrTRJa452xzgGGeUbdzkr8Y2eJuH9y3RhxYEYeqANnDNZFMSXcwCMvmmzkYF1BEbrX9RrvK9dwT4mZLb",
  "key6": "4s5eNBNoufgMYewM7FMJHikvvrFoNdFae9Ewcvjrn2tPPFH5twzFP3EhZs76VSwkq3Tf4xSQKnZLM8PoxJzvPc4F",
  "key7": "2DCSihJiANDycFrfuFBo9FMdCo4wnBFhBNmPUskTxSv565rJ2Qkhk6YntvMwDfuW8EbFSQdu1DSRJck1W4J3Qitr",
  "key8": "kcHmaW6CoMuxWJe8kX9fs3hScoKt81PC8vcnGxKU2VKjz5DinUYwF9nmMQ7syCHQm8m6Crr8hnHcaVzLCUTo3Gz",
  "key9": "5tsTqLbD2bmm2SnmE3U3aLf3H6t2KyqKcHGkgrbHqPXABvaDJMHsdypLaG7mvsSquPMngT1R17fDFb2t4kCDDFo3",
  "key10": "4HygZhAQzJnGPwevoBdn5ZWE7aWbni6E4Mz4wXHwbusfKFw9RmcbYg2kiFo2FvSLipeaV6BMbpgY8LMhvJzBw7rS",
  "key11": "2nv8qaG1azGoJdwkFw5EFGhoSQBaQNquCZ7SA1HyNq5MUH2qzJzqL89Bzvy84MXMwoiEHULVJ9jyTjVJXeM7Vpex",
  "key12": "2Ax1Ef5YRt4X76cpy231Y128tc3aUJgQoST8SEzEXdfobZZd8RQrzL4QtxAzjGQXDRZ3JWxnwreoo6gwrmMoeZTF",
  "key13": "4va84dpZugVs6vj6KUUur74kFk3JrkUZ4kmV5FBFcgvcJpDCMTpUAN8h1B49Z8ySRwAp1F5EucXVpVqWtjNXppyW",
  "key14": "5FL6iZMAzKm7QiMQwRaAteNoFM2AAovwbfGe3TSbkp3C7e87uYisXo9jcKAKNaG9PeCME7NhToGg3ML1CYHFEHYY",
  "key15": "3W3dtpVf9vqYc1prWzhChapVcwyhFgcBFZaJy6aGZQMiqaiZskVQBfvVe2AdRLzWmxRefFKaeDV3ws4SrugsFG25",
  "key16": "2rSwmCPaU8PzCJmoUFAhA1xTFTipveGQH8Tdirn8ms3bpP9wszGdhGJqp1rbEbMUTgGizgiqeCi974sodBHrBvG1",
  "key17": "2Q4ETDSAZyWhnsUstSyg21bBiUHQWs6f2FQyoSb8s2DDu2izjoXHSM1rLHRxmraeDdP9Sf75jV9zVhsfFy2DTFF1",
  "key18": "2ZVBXa6KH8k95HrEhyd9k6wTzgXJbgqqUAyRmUmGicwTGZjYH5VNLwtcgLxaw85AgCAx8dfKsBpQbSqnW67hHmVS",
  "key19": "2TMAVJHVideGhubeFhzxsd9DNcbTzgnCamYu6QQ3g3NxAX8pGWHdx2rBL2TEpxQyEGz4STGXqC4d22D4d2gYJE8E",
  "key20": "5hEc9xtc4uffgDFk8eMuov3xADQXXrin1C2b2p3ej7uHWbQydWSTzE7nguieUN6jip2A5KxHF9dGKVntNx1iNF8L",
  "key21": "ahmi4yyFd3jrotWCAyEWVYVYkicxX9xT9hzcptcLXSGSEW5o7hCCgpQpmS9r8Wyr8ngrmiGdCBVC6o8THrgwyaj",
  "key22": "54whSs8x7mBwMW3zc33QcjffJtHXif7w6RXdnQ3JypGeCL9fP9BzoXVXKyjD59xnU3refqbGHvrHHnxUTwjxKb6M",
  "key23": "52LrnLXagQ5kMA7Vh7zKRjxtciHbdrz9owLDQNpAJKZrU2EHqwyxwAMdh1MAu9xyXmSYv8X8W9tuPxCactXRdsL6",
  "key24": "5bD3mAyxHuNsNhpjdBRnJQZy5GXJTTwPobZciP5KPtzB6nPoegkkCC24r1NBxAumT6ZMr8VDodVs49WYkPTn1E26",
  "key25": "5sBjgFrvqNnWzhSGBgH53DknviB5efRUJNULsVCSyshFMkNf4KddCVHt52sWwQ7HTuMmRQ6jg9xv7ppejy3LvF6Z",
  "key26": "3Ec5xqT6f3HM5SvR3jXjUD7EQCBnEdKj98sjkYKtobaZ1QBZUCEsjs6Ygzx8gCWQf3wAugdRCjAcnwzRK5SWBV8i",
  "key27": "36ptokZVR6rABPmxesvkCvVsfeBRpprRmnMjdvSpyEgdo4G4pzHLA3ShUr198FiduGM1xuhXfxSFmiEnG9u9SNbn",
  "key28": "4c4V7h3vCukuca8exvDzrJzQAbmESQBU9PbVs5Z4ziAVnvFs6fDgqdEaZJQa2sQ6DstWpLAzAvTmwHszeBB52R7K",
  "key29": "4jYQ8B1rSsoVbcaKQCQm51crALcH448nrYV6d5mpVtpusGR1ibYVog5bh8sAg1add26o7uEejcLd6VA9WZxxr2Yd",
  "key30": "5is76ygX9bPSaVUx3bRwhmTp4qevk4t5hwCG581u8XmkZjhHWUV1HWxep84SHR7w4HSLNUjVvYX7Fr9vTGmCUQMm",
  "key31": "48xSkphVy47KVjEYqe2wqLUstJdFqgYiwDdKauVqfPiRUfVACfNp1p6TcZPbLs7PSsLsdokQ5FUqSao7YXm6VzUi",
  "key32": "sFu6HfQFpnpnX1oSpnpQTabHCnvvvMuCuPnFrsSYouu84ghcxnEtXoctp7trW79ecNYqHy2tkuta38ePUx69Vfy",
  "key33": "2gQidryc8FovirVd78AaAqiDUhmnEGR34hw4ywD7avRQvsfY45yavvsMSjjUJUDa3EkNfvjSzJDUQZBRXUWBJiuS",
  "key34": "2a6ZuiwwuU7YxmCX2Q6Pjf8ojbF2yrFoxDs4xuEthNWGizSoyAdw5Lpcjv4rUsssCFckN3fqaGKdauY2C3WK4phF",
  "key35": "2MrAi9H8qo9ZW1AG3xEWcH5PWhJged6xXYuG1A454zR3h83vG7tBrzyTE1FeDZ4Ni9tmZh4jW6LTaR8D2s8E2DBu",
  "key36": "2GkCrRrtpzcXfhcsx6P2yDxKiqR6y2w2CoBFgSMnTcZVrNSx12ozMvkXxDu4Aa3pJe5RhgRujNqJZZHQV7mxJRcm",
  "key37": "3fHsccyfPjGyNZbzRUfX1tZ7xCrSa3bk3aZbbBChV2sHR3TGaEmnsBGFxjviAMGUcKFq9VT66RttqVkqzaAGT9kX",
  "key38": "2dzdqVki8Vn4LMe3W4oPE86bSfiUeAGHfyJJRke56aNvrndsJq6XqUvfHPBYS5ridGLt3TcefxKVXjkrjSUbZ5cU",
  "key39": "5APY1ErjYYSruQTkzEnpSv4tTf3iFGeP7xb9kMPjD3eQ2TzkmVcDVdsQggeP5yPB9SAmi7fAXV1EGzTfX9m6EAUg",
  "key40": "5cv8N1ojh6TopA9ngjCGXWHKUNb3bwjg7kuGS6VKJZJitS1gb3GRqPW3rC6bAZ9yio6zJeBDNgrguUaYS8Uq4WpU",
  "key41": "573AFN4s7aiiyseSCjNyhRLUqP7NHxyeybV98oVEoPEBFesXCZ9YQgBaVwMx74q3pdvwpTf3dmR17KBfX8YqM78k"
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
