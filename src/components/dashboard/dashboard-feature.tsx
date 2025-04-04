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
    "x3nkkFZXWAuE5o7XHBCKApXeq3qWey8oe4hEHU6bcrobfPthtpMGitATLVXS1sfnteaha3fMJZRfazviaJoPS9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a2pq2hy4Tnp4S89C6FyCZhUfB7S7Ty3Gqfws8cHuSmJ3oPYRvq349XQqsSbYLe1hGt3ZsQtd7VDMFaHe7RPCk3C",
  "key1": "3CER7XNMDKRBoWUr5KwLP4SrJxQzrc4WNtQtCyc8EzvNoEtSMaPaUyvRFdg1wEN7ThFF4RSmJtoytj8HLLdprEYT",
  "key2": "2KMrxmNzg7qTLu6uayqie51i3i4kV6u6QXCTAq1vbZWdajktLcKw2TkNiZ464GYFtdF4j2PbSVhiXHZ8sjSLRrBP",
  "key3": "58BxLTFncy2YwtJ3TL6PqAHbkR3kCX6rcARw3F1hc5ApoiSU3N35LiNy1HR9NzQAmfMdUjCueFGEw4H9KPjXiX5e",
  "key4": "3XAYNp9zsHDwd4tnMDzcsBEZCtHF4VMEv4gccirGvpe4fXq2sKkHK98Q8hSfsJA6zMbX2cJ64rH42qmLd2SMvMZ8",
  "key5": "4uXWouM9MUu4WaffMqNyi696k7DAb3zA9X36eLVRimeD3cQBpi2vXjw1YNJC9rZxpopofCtrEXkrsnfFbWNVFCrW",
  "key6": "5secTRQWeZkmzmFb1e3EQbzzSBDabQFNxMqGrMqRN9MzHFgcSqWvZaFoScqutsPjME4JQRtCaBb5ATH9PbcP9FuN",
  "key7": "4CKRe3tdaW8JdZGXkSyZjvZry3WHzjkU6CGneuQsQ4oZZuYnyqorP1n42ky9iWsSne9kKXNLAqLpC8fgdnYebRDm",
  "key8": "2JMTfxCV8Qo6KvwRjkSkGCJYvcmgTuhZHetiWhb7GwUUiajaSjz4Nr2qVFz8X9y6QQsKHf9B6JCmMZWRKnwDBmTY",
  "key9": "5At5CceU2eL2bX9RAJtuQeT7RvikVp2D5tUQasfDEumwcHqPL5XdMoHvJyK3CJVvm5t9MpwqQWiRjZ6pcgS3TFBF",
  "key10": "2BxTXv2P4mDk7UxCLLjwK91MVRY1tstqZM2UA6kA92dJWy4LwxfPHQR5HxM6utAp7fVo1EBwkR4sVmTEoNms9VvS",
  "key11": "2LfNC9f6EDCgKEULtB5dE2tZ4YRq2HRH9GbWMaCHZr6a6sCg2WBams9xTXKxzWqVqfD2i2pHihpqyEsQKoDDQp4C",
  "key12": "5gh8p8URTwUz73jsJ66BvjZDq7GniAesKrJc2aGvRBW1H7cf24eycHnHoCiwUpvoCtTFuFWsRQCvLDYZzVuaGGbq",
  "key13": "55mq92twxEqwS8oGubdT3aDSC3aarvXN5x39LPxTa1GNF7P3QEh1PAbCaWwoUxH95AixDM8iu4jMop955jaKB1X4",
  "key14": "t8ymUQpGJeEKTgFq1SU1KLiPFFFpg8FNK3g48sx69JUbRZQNhdKtE35bFT7UWYbNyKPLbk4dnS3ZQKHyFoz2cgD",
  "key15": "Axx8Av3Ea4RFXPbQs2wc4xqWoHWamxHMLP5h9PrX4yGXs5gsKyJ1voSPaB2mtUAiUuKk3pbQvqZPE3vG19ifmmo",
  "key16": "4EBdwwD9SwbH8AemYSfK9s7Exy3eZCPMqfB1VfSCcR722WMMvbezd3TjMCowXsgHM4RUNWyC8FkGhsT6mKxCx64t",
  "key17": "A6HPXk89kd5vXyXWhkDLAJagEPCFEbucjAMJyNrBqiLhmQWudjfjfbw4ywummeCKn6eut19Xijkfz442KyX24Ho",
  "key18": "4YucbX9mfqqtWCVzfYDAYicwZpU35TUYELXzRwK9sCAXo66oYvodnsZz5u8G2rtxEahYXhJ7GGysboQbycieoc5G",
  "key19": "3jkkz2y6JT8q8cGEJ1FdCes3hkzHrmAjR8iLzSfPXjv51c5hLsJBKxssy46oUGfQriP9hM37ckhEmByMD3aBDrvh",
  "key20": "5jnJqhQPjv9ihUTwLf4kU4318ujrvdu8KXNgm3pXFMs5Dq6zgnGtfAXRsesCHVLoxWH7dZQVeNSqikgv5Ne4wee3",
  "key21": "5GrTKx7N56TxpecvnGw5jX56ynZq1SxPr9NnNBrrHKEmmqL5hhpTj912PUtgYazPD3aNLxpFRPvnyrwHJiJcDDhC",
  "key22": "3XPQALSp2bFjYFnPnxTFSGupfddofL4MhaWUGYW3hXFMMCAjNCM9XKR6Q9GecE2BkJp1ZxSpxi6zioH3MVThA4YX",
  "key23": "5e6m6ybqDU5CXUMWUvKLubPxhR6jqQ21VXLP7jpUTU2FVHMPQ7pN7obGCSqLRzBN4bXoLGuuQhGszYE58hxQfoAC",
  "key24": "5AZ5qQmFK4LaUSVWasMwagEWKgFrmLc8DS7JP9GxKrnRhPsAbnqeZsfUzhwaDPnrm3UAzC4Q8zAQETts9oC8mtoQ",
  "key25": "5XD4wUzsHf99JVji5XXY5i4yJFBVmu4xJqH8bpa4yuAEz62XkAf2nreWdqfv2nM2V7qaZKKwg8CJmPYjuvnhJ3HC",
  "key26": "2KNCZ946DUmuKhjYmQr8m7v4dwYXw9E8BDYJcTSmbXGYmz2FUfyJghfxZvdBZo6391CGEzZeKGguVtUYM9t3PLtC",
  "key27": "4oaZQifj8sgGriuxXwS8QbwtgnvekzY7iFQQFw3sKSHBrN2fbjghPwic9iqt1Gmn8JWosTqPypyygyyYLC4yqHVT",
  "key28": "4xCRAwTjK21rKS37EVVG2Q8Go8SZB1HdhK6eouWQNyZhuh1CVvWMYR87aGDrWehUu9W5qk9oJNqWBpLJe5sVBeKo",
  "key29": "2UejeZW7aZyMgsrqkjKcpwwThn6b19SkaHCbHG4pyq7CJ2wQyEfsQVo3EbsPrHE37jc9a981iHxNLy7qJQXPvh1L",
  "key30": "zud8nVH6NjcESNN5ADdq64cqzDeaF9bCZW2Jwa8p9XCfeR6gQ84uWXTLeUxbmLA7iet4BGogn2gCxXAhKwRFhyJ",
  "key31": "5BmK7gWbYGvXkg8NJd1AMpz2U4aXE6xhhb66CNVoCP3dQgRY2PJiqEM7M9edcfF1yPJcJ7d9bZi9DhpRZzhg7JQ8",
  "key32": "2SMoAzbaLcoM7nybmLst7NJrLRMw6Aoeeqs3QN4nBqLEmqU3tw1zrji8x2EYz6Nr9mzyWbeFU986sKyTzEMAzHgG",
  "key33": "67gHhx35HFySypHuXPw89gXKNZwi8DuByZwpbiyAHsrhjnV8P6nk1NG45uarfyR6QryjeBjj7qvAm9qx5asJ6fyP",
  "key34": "2qDN18a7k6aN4Dthhphi7ys5A5k2b3MQ2XBj1CYpVNnJP58QQeRSLsAzC6EMJq7bhDg7vDyhXDYuwynuexsAoaoD",
  "key35": "2BYenZL18vpzwn8XJfHWKweVLLRiVKM6fA71LYdjAPXfQDcjcSuL5999yizsTWBGcrmKhxMYhEocq2v1HGgyDiQv",
  "key36": "4zxfdVTw1qaLqZRexF45njjpEdfnEDJKVcAqMCD8wzVUypyVb7VSigRwDG6TtDQuPBxcakEuWDvmy5kpeowCteN2",
  "key37": "2seMkG6iNpKNE2Tb5oUTwkvdfKcqDnLhyBzeLiF5xLB99ZFyxYGdkKdz94F61i7WwnABSu7MKxQ7DbNAsLcNh8Br",
  "key38": "2m3c745BGxPB1FiaKCdaDge4mVWX8VAVQCfVrXNfxy1JDFefKkRk3gifFfbtKwoFKmXtyPEK4aTYZE7wmmupUnjK",
  "key39": "pkXNSYRCET3fjkwVQyYiitQaXQo6i4xph4CtXU83d58UpU4tgAnBz72c2D2eBgJRn9CC6xsvbe4dRHc1dGwz64n",
  "key40": "5sh9pxRVkR36KnFS1wXEFNJSQk8Ndbwmfu6N62SDjQaVJsJMFEXo4EesikmjupWtEUUrfFNvArA4ya18CYztpaV1"
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
