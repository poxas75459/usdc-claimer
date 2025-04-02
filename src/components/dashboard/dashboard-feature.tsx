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
    "22DNUwzeZ7BwkFtDExDbofLpdWS4FS2qGdbPTCGnsk5APQpo8R27HEB4VFMXoTSvXFWL2mScVEWS5nTnPuiJGQT2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dRvhwpipVeYRRLdusGMKhErYEAtWzGdW3MPcAFtQDLL8AQnFHactZac5AsgePStrDcjj3A2ENxSVH6wtrG5PTuy",
  "key1": "265feG2kR779drKksoUJoLqRaxrQ8t69WWwphS1wc5aW8ynS6APSF1GrHUEF6wjTspNdP4TWrmHRDBUMBqvpapPa",
  "key2": "477hxyMJySo6XRNtukUEJXDcfcYsZ7WXBpXSiN7MquQQEc8suwmx3dvFUUr7LMZdr5zYJ6DU4uPbND3DoHs75X52",
  "key3": "3aqRfj34jheNzeKAB9N71BZjfLtjGpKWe68SYLG6QDZ9U59amqLAnE4yviUr4TpwjVSYjfjZ7nKFv5XJ2xXPREaM",
  "key4": "2GHwYk6THLxT83hWQLxzq36nMWEQgJrfMZ5muGTGZ7mc6ZTahX2kzoMpAWWm9hk1Uu8rrbdj8saEbpiCGmznbUCN",
  "key5": "4E9rrfYtyStMcj8bLX8b4q25CRQDFYaBhYCtfrvDE6e8fSNQMGZyBu6dH9U3FdgXpQhZFLxqpHMwh2j4jXfrKgpj",
  "key6": "gE5L1sVPj3j7m976HJp1p9PKPBCyCBmj4UbzFa9Gq5y8LkDxxu2oDyaMy2SjRifgA1F3cuF32insL1NdjwfmSLG",
  "key7": "35aeeeb7uBEHEkYu5U8XhXS9bDUkFqopQFZVCz8eXeX8W6pf6h7HeXeFNukyVGeM3GVkNZriZYKseA3A8SbjXR9F",
  "key8": "5zCbpX9dMEbbYPi9nAj9Kq3k1fVZKVpLJ9oWfvpKFswCsLDi6sBz7CcMG4oq1VwUQe2HNwUgPHYPj3hsTazd94rR",
  "key9": "57VZviuEWy2r8FiGiykS471UC2MZz3CPUcq5xfrnYBNVD3ir2UY6Y9DnVLhjHtFoQTJRpikKx2bLhFTLZxUjQsRq",
  "key10": "gtv83vwsXm9WCKYysU1UwxxSxhvzqFt53AMDRCuWrbKycjSMA1DFM3QPGzrNzBzvxrqadujWZAAnkcLHmLo6iZv",
  "key11": "4tEV6v6mxjmr9ubVX34abofiaYnR7wFm1mQSw6t2iew4qAv7iDp4stNEcYuCij6ghPrmPyeNQchTUYZgEoXgdZu1",
  "key12": "2BVyziBsbYfSytFwPHBUmi19rfuwzZUKasBRYfWZ4fhKYQjEYu7ULGHAENqdedPUqajgyGvqUo2on6EnJLxnV9vN",
  "key13": "2Rz5RuLJLZrFZjht1Vg5tZy3KpmnNAzTCeTFoCQacQTPNjDUPaytEBmjJhcH8spYsgH2JvUU381X9KrjeXT9o3L2",
  "key14": "2fgJ2bH5G1UCPRdBAeQVvgDqq4xFcNhJCCoDQr8XffdEeW1PfVBKDokgxhV2h7UHVq7qwp2qYaecqXcdBEjoxzSo",
  "key15": "518FkSx86iw6kfDUHFijQS2Uw2dgT5RxTQqELXawjENP2qvpquEcrumhaMHhqfUC3doBwnq7wufX2HNFmDShEwEG",
  "key16": "5dTBnVDFteUpiAYp2YeRkv3muJYKsp262NkK7PbERz2q5gAFdHE3zG7uLsmgS5oLri7GZxq55FyD9T94q2dojrm",
  "key17": "3W99uy9HKqXVxi2ccZ4MNbu2noDC36or41S9AauMMNe3o61wMCgU379463sJwv3sGSDKFDE6vrZtTPHr6f2m134s",
  "key18": "2oRN73CFthXFxX6m3H8nTkP7kPBVhezCRb1pcDMChb48kVMnwXamuQhUQv3miREMhv9ER2w5q8bgyz2dFVV7kdg5",
  "key19": "3LKN9ePuLHFeAfABAKYNKUFVecY5SFTyu2Z7FvMoJgvyFRkXftkLsQduzE97q4zZjpwqC6htCsBsMEdMXq6qpVjx",
  "key20": "4ScqDNUrCxBSZTKNuG33miPAw5Zc4i7wUiZgUxgijySzE2zkidrm784B1TiXf7NrG82C4AnrD7yyL4k72fiUYJBs",
  "key21": "2asXrPJP5AcmPNv4fUCwQgLseVWcfxysSBtJqAKakinGHu3ab2WRWxpPF9ZRyu1UQpuVo6cNDiDGGVWgj5qMPTr2",
  "key22": "3wZudxBqRXqoeiBuzzGj2mssx1bH4zBX43ojucJGadYqEZpwVR4j6fvGEuxnuU8s8dG6vTghaUMcofNwaaADuGPL",
  "key23": "67oUskoLytrxhJnPM5n7t8Xr5hMqGQYGupv99764VHLyXETKkDrzAgV7571ZFTVtwoVwmDcs5HhnZwGoT6XDSbR7",
  "key24": "66WTLiqvuM22WcKc5L7YNooLDM6wJ2BiYAny917BH7VrrNbrG1PbXF1AnEkoDJxXyaNPKyS8nAcS1RPFCTiwgmKV",
  "key25": "qxQ6NRwq8gopVMTJPm3Q6Zyv6XwT8jhAgKbDK8Y3FvqkbmEsg9eey5QekRMPdxiR4RydA2bhSeVrFSMHDgFMuWs",
  "key26": "cxMBv1oSiikWLpTU3dZavJMdiwoZdQ4Hbq9PUx79tXGMjXzWjAKHbGifEuKaQf9iKmb9mJ5zwGNGo1RaX2pyVUx",
  "key27": "3j9pav59Nt3aWZGDaxtjTnUJT675JrhxEJq9asEJDUD4Su1dwCytR7P6Q8o6x69j2hPSNiTK7ufCweGQhQBLaEgx",
  "key28": "2En3EVa3YJksna66PaVH4xbM2Tpq6eaFXZ4t8DZSmqDrSu7st3WbXfaSrggc4uGYAAjkEUGP3Hrh1eum45WNmGyb",
  "key29": "4pMk2YbTviWRhAiSUhy2aK2Wcryz6kHN5yUYiHWUkURXpvx9pJWsFKRmnRaKXSp7pnwMQtE3DGnKDcu9HQjUm1C1",
  "key30": "2Xh7EHRUG22B29dWEvFbg6Azce5dp62Rqt2N3PaZKdPfSnapiVYHdF7fV83ENBDSGKAgGKQhQWbxTCSiHDmDXtyy",
  "key31": "nKGH6rPxZ3tgFJrMinsoWa4ahynvdTdxjkxmTTCjcNQx9bovKAm7YusS2h9LLZFevMhVBfQaoY636Amj3VHdqcJ",
  "key32": "5y2FqtMt61FWWyeTqwoQVXu5XAGMuT7BsEgK8iYbPFXVAXwJQzMfEBe1iNLxCzi9s7DaK5ai82Qv3JxfxnPd77Rp",
  "key33": "3VKvjacNhDgFi92dPZ7LLVBDDSQdqurBST1tUhX6Ut44cRhF6nfaFVLGauYij9Bpn7CxZFpsBd921Rqhi6YipFz1",
  "key34": "3V6FpU9hCx3SAs8ThzgwKcADzrn65RMx7rkF2rZqHuMrp2PxbDTzC4V49ueU21y5KVtszrtvY1KEgFK2sq5BUePF"
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
