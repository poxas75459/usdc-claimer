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
    "2GM6QAe2d3okb4vMcdACr36AsEhf1zQy9jMZWUnbRbVoSYqPF3Da3R3TMemtP8neDUU7oW5SfG1qoQ4X57jog3AZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rK5F289syx9UBpzxZCAZRUADZjLw8NDX6z1jW2Hvy3hYUar38jgafR6wMkwYwN3hRX7tzAsqBAEFxWEDa2CEyPD",
  "key1": "4U75Db3DqTLWcug8aURCudmfkYzKR9GjzzJx41i8PVm3H7YB6CbM1YetaGTZ2vxUT9qbAfv5oFzXnMjFuScveo3j",
  "key2": "5ptW7BZDwvy8QXwmZFDG6Zno1WRkqwmnznS1xhSWXXvgTnAR3uVFN8xMc8hrgHbxPj7m3vzkg7TqxCqUxTYwbfkv",
  "key3": "JjmgA2PwzFZ3wHncFHui7Q31Pc6ouxVyMVBkZsbNnUBB3VXgi4bw8tB3BGt32jDR7LZwA7NMoXr3ry5afknjoDv",
  "key4": "G9QMVsezxW1bKp5EQ61EpRV6nERPU63eHNG8sKwo3d2Mjv5VyK1WrmmkRdgAvwnKv1mT8SvRSWEc3LWXHz73wSK",
  "key5": "5KveKBucyK5PV9GBJaM7gmvKyKmHFf9zmAWoCR3NpcMocWqGbYa2sGkBWC7TNT2PdBvsd1QtQZbJrbDcbmC1hvs9",
  "key6": "4TwkLnQisp6XYg1C5MWx6SiYjNe7CCDg4i6rut9yA4uuSyiQq5Cund4ZXHpAeQpLzA2T1wj8NjubWqn5ByZjtEnY",
  "key7": "2jxgi5VkmiqeW5TPfgbU6VYjY5qtqJURtdAEzFcNnwSMvq2Xuk2Guzm8QMnhaKKwf3BAmtPsuPHXtyrrYGJq65R3",
  "key8": "2ykP9bzt2NPYF3hSJEDWDude8FTQN3vYVGrDX1XYfVooMBsXxfUhNhzqvPvCZNhJ5RPDBwrVGouGb4ntCZnxruYA",
  "key9": "63kaNu3Voa2d3Xosa8JKWKupoaxm9AhDQSvwVrt1tNVj9vBJCLo8z9wCWMAi2ghmyk4NouU19yKLcYTQDkaTb3sD",
  "key10": "5hSJv1WaMwV5WpRBKAPAy3ozdFp1mSoRgvm6bxyx2UUiUE718pYwtNPPqeHV3Ed4cwLdDjgn9XFsdWctR9WUDa7D",
  "key11": "2qAs98dpo3EDZFv9hv5BskH1ZWmBV17fr8i8zKvUtJkowPdQmmNVJxrf7beVEGKiA7jnpuDfjAA8JKyVKBPD5prh",
  "key12": "5wCPrY5MjZpi2MWArfTPMeHADzwT1rtVcJRPmdrg7tySBdK9iPC2rsrByH7xKcRvx9szHebFh8rrvtdivsnVVfVB",
  "key13": "B8h9P2Z8fiSf67ZTHChRJpyVjrsQxXeADD3qDivJ9pYRX7bp4wrauKcWNkUAJqUbnx3Ce3rFEZ7PZqfanmBk9GU",
  "key14": "2BAfezdAiyCX6x1wBpCPGgTJg2GuxaCEUMBnFWTWHZ11shWH21iuDdxSnXyx8R3USqe695spQRj2nvn7RJNen1mS",
  "key15": "2F1ECs1f71VjPzfAo7jCpdQWGttZxg3Hk8yhwACkVSqPcRhkMQ3i8MfrXCRT235vv27BtQHCBDWMrRMkbh8e3YCy",
  "key16": "58Cgg7jov4xwfEd6jYrvMGNwx1GjFPstQ8YkBycW3Gu79SFjAMuG5XCdn9JrTRuZFe9jQPBNmBBSdGANQubYANws",
  "key17": "5e5VZ4FtboPQg3BVmoHV2ZuLzKrnzYrohGgssmEocJ6fsgQs1TrJaC5uePxQ4fAXV2ToognBHU6m87T7PffJJZJF",
  "key18": "3guZbkXoWrSMs1LS9KRiTYwMKZCvunoYdQZMTKjAZZts2AK5hfZopFa5Lsw9saiJp234tzPZQw9thk8qdkxi83Va",
  "key19": "5te8xGDYCPz6aST8eeoA7K3C7JPiHz6eveSfMHu9RsKNFS3sczQ9DSKn36eBpNDe2g9FY8TDyq5HnYZAJ2GNJEe6",
  "key20": "3efrGBox3iPfAQyjH7rtrqsCciN9MzSi1evpLx6y8Pb2Czcof9JvZnzC2iRfTspE8RwkYfkXYKUco2gHRSXexN2r",
  "key21": "3v7xb9hFpDvrHKtiSbSt7AkSCRmF6unvCZLiVJ2QyXcsSSi1EVBNbEBy8rQTTe5ofaeFrdFAEjZaiioCi2ptjbY4",
  "key22": "2235jcbPHjoZjKgrRiyHHX6HPqwLfkYrp7ATC8YqQoRidQBxMbJpo8GsrEPEttbwnswnZSew1jNMxtVHKkxeWBgA",
  "key23": "eoczUya1BRtvW8R3hCTT8kEma5D4LprEA3W6ByV963Y6M3hcTv3NyCNyYt8W5gRsSto6YNC3ujUeXgAGYz6mtFc",
  "key24": "2QwkhVZYWBYREfn8L8dLcecdUPxEBA1H5nJdoCEt5ZKfy89ZxSbZGSpE1aS9ryrxSbMZkqyCNxcMBPrqTa8RDhb4",
  "key25": "2apzeJnZbpBoso5256bof8rwX5N5UU5sCyeSzVaK7YJ7em2gkRqCB58BPcLtusarzqa2wds7iBJquixvHJTnppMT",
  "key26": "5YVvpNfDYXEQhuZRRoskLwcHrURVBU51VgodD2b8fvxQoV3Y3Vp2ijc2M3RzYSkQJfdTLGDVN3JF9DNpJhSjTp91",
  "key27": "2XBbwWCERy2VFiaGZ3jQhP9gUR9FSjD4W6nHZepPegXXazXhpXeSMduKRMTVNCAuvp7HWYWY5BPmQ744hJzi4rZD",
  "key28": "pyvBJTH4bEVc7D7vvNmdgnRb6CFBh5fT4cRrdamTAgosuEzDdg8T3UVtHQMJQEhPqodx8ytHM3i4U6nTQtiyrgz",
  "key29": "GQv7rZ8tzTUv6jgMjucmssf2ydzNibuJAG2kJbtHgwk7pWmeL2TB1vSsG37dRFYjggmvCuReBKSDaTmvwXEm8fz",
  "key30": "3Tkpwv9yqxbb29xK19wQ38QhtXcGDgTkAfADRw8x9QSgiSE4H6gyQdJPqiFk5VQDejg4wGzo1JdqgtUtnVCY5PvS",
  "key31": "ZczqLUmLo2sZYZmC2hkQTqV4Cdepc9RCH7xjyXjHXBCn2gvTp7fJYhL8QbdpeztF4HtfcQcoG1joiRcdn5SDNzc",
  "key32": "3DzzATWDzEtzDgPNdmAL8eywfiNc7xy3kP8ykC8PkRNj7HHtyDqU7uLCuCfvZgZVyrDyHPKTji2S3urj46KgJNJK",
  "key33": "5RDRZfgwWoehZqM4N4czeTbEhSPgBfQRyASTPRZe5w5QU4PmzQwE86kPTafCx6L4D6Wa6GmCmG5YA5n7QidSLxib",
  "key34": "2t6fo5JjzsX9BtD9DvGAYmHJYBuzzkRc5dFycg7REMm65nV34brz8GuvavFWb3fFjjuNHApMwDa6nDQyCZZBviYZ",
  "key35": "61CuvUa1mQPX3PbsMwZsM93bsEfQedpvWrP5EqXzQRx7HV718f6Y6C6EYovyLgt2u2cdoW2j3ujkannryFneUu22",
  "key36": "4cd7g8N5LvLnMenFquqUWrgtWg7xarz1h2eKmyNsfVuAPu4AVBbo2qVKMmnZdWodMrz6yCqaVMgEGn3YLttCuMuD",
  "key37": "5xnmqmXudT3qEyJyjtrhkmZZ5BzQzjEFSZpJxG9XdZMDujuaUEEbcxUm4GfyFwJw649D7KN58UENvgKefLA8Ls7x",
  "key38": "4VEdYQfMGu1R2CU69PyjgbRuNV9TGrJv1ab8mnHNZkpe2aqBjvHvhRJWVUP8ngA5VP4woz5CbXHxwjY2g8grvj4D",
  "key39": "4nUaJrUjSdCUixkrU4R1cqBWrVtid1JYhPbiHckePYfoc197VJscXzqSCkmD7BtaiB8rxkgLd3F58qCTPgVqwuPg",
  "key40": "u3MpHmYki7hVEGNr93TU7F5uEK8krXNr3MFkKGpWR5UkxAwQ1xxh7fX1hdq7eLeuj51JWs9oVu7s3fXWYbLTAHY",
  "key41": "3JZ2GeemqxE8wKgktG9dVAZK3UBrohsnU47yf1nn3JMzN4XeESGWZWnycMrzsNTR5iK6qqCfyBVj2qi95Ju1U215",
  "key42": "65qmmDNyJhRSomk7dFiHnVrtc996LD6pFSbJ6XDq7aF8z8Koir1kHej7PSUjHC7pfXogSerhJQMm5nm8ySRu62jx",
  "key43": "3ciN9rLHbBe2QKA3eqyw21VF7UDgMXqgok8BgmhYXeVKYQq66YhdVPzmBpYwECLCfWM1fJmYTD4MbeMJLFaPoMJD",
  "key44": "4F34vN1ic4s2dGJ4wryUzznDrwMsJrittBBmcprrrdJqp4T2WXAP1e93aWTkBtaYFAcZmXgfzodhKnXi6u8cE7GE",
  "key45": "3dDU7v6G6j395AAHuY1ZpJveZ4Cf4pM4mquXCddxzBV5z6bDhKV6UsJPQz63LFp7BLuzTA4vzTcoqRaj6XKw9DdH"
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
