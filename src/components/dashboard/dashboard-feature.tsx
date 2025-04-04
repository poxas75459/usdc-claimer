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
    "qc5KakRVwhj6zs3pkmWjLBTxpnWpPSKFC3D63QyMWsnv9wjw8WybpHwwVVqW8fykwG6EYgjKMD8WHMuECPMQdTX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "azXhZHnf2JYiUR9RUzvovYvJ3XLBAjfBWgvLFnwosZ54gpAr3c72gCUyMJGq5a4jPhksqKyax8YK4KaBneAhmDz",
  "key1": "4FcCANXT1tBQTR2sQfcrXJymoG9f8jjNEXcT1SJw5vS1cq3Xg62Boxo8LfCVSmCN3amktRj54bLifMnLMtbFXo2o",
  "key2": "2VPDMio4Feh3XmW8k3feSTHYoB12twavKhdPDX85cysScaQyEbVhpaFGuKVCscpSiZNckPbhZqF3PxsVmMgUnwy5",
  "key3": "2AnM3kibswYuuvRhVMy27f33fa83dbUho4bEpFmeughGGFDataWEZUD33pqCi4AQaFWKNGtuzx7ri4fjJnGPVcM4",
  "key4": "4z6gHHCTEq5if1SxEig3LVz7kE2m7jLeCeoupda31FGQNYEgXsZughdwEidReHARYnTDmk8zGjc4qdzT4dDScyL8",
  "key5": "46pqsizsYTPpFmNDA9aKkSqZvVUwsaEHYLQQpnbazbutPwigbYDpEw5fRcah3JGCCoMGKx6LybzzwJN6Fe7WL48z",
  "key6": "3cNjazqB79ZAH4G8ksD5ERnqiMaLQS9BGszkV9hbxb9eAStXZSEwYMp9NbXwmJFicJPvXXMTWdsxfCfw4rZwGftw",
  "key7": "4ci1QPN13wkajjZDWXdcFoCuaNbEpsSeHwFuM3wjnBzkewtZjnCW9tqdNRTPEXuRnTT6M4n9JmvvFyErsvnfopkr",
  "key8": "2LrffCCU716vFxi1Fd2rog6gvTdSE2a4UnsUZTX3j7NPZBLpWnA5xGrnMADSFxigow5eAtvmikS3PXGvVPNR6VJA",
  "key9": "3QFzJWsfLVKQu3MBEzYuoeiLkMLBZPTHDnhU5oXSbtdTUzE8zPVaheexeZvDwWgae9LXf17j3fgaWF49mtR7ty4u",
  "key10": "3zBzmpvdaucMrFLwrXcBsdKhFDYFGQdYWrbU7kzWA6QXDrKG3Nkjy7YP9DPKjSU7yThxo3yev4WLsArBb5YuDwnc",
  "key11": "56oV4Yv24FRoTB7vnhWAVTibRbN7E1iwZoYcfewWtv6BAkcomV5T8SqATXWvbaAs3rsgUwfnEt9Md8aqsHTVyjtT",
  "key12": "3zUqMuZhbiZXG1wefJQAJJimSeUjPBhp38A8vZx7kUenAiFkJQ6wHhuad4oWVFq9uwZnDh8w6GLsFrPCh4EAt1s",
  "key13": "gQuWN1aauANsfLQj9RqbfBU9Dck2DJBNu5jyiEzdx17XPFhPtQkQ6RjrXayzsQYipDo1CutfYMW8QRmfxHxzfit",
  "key14": "2St2VQ7csE7LYwNVTqzEuGBM3n8j21Fr2ePxGF7xxohTYaV8fpbZ76SR7MkELurtSvQtawBezLfKqsHQhd9AV1us",
  "key15": "31iA43g5xVJSzkRYJctDapnNaTLvLsxjZkt8sLUXS4W2PY7CFEYoMF5SYhZyKWbi2gj7qvSCGmkCfNitXxmAdbrc",
  "key16": "5QGtSRsavu7THRpHqi6Uk5T6UHrHDL7sve2yKZTfFfMcvEoT7KPPbyLRrYWqLNAMXuNTw9byS35s4KNtGNBCGEQe",
  "key17": "3iAqDrtENnZghsG1WKHNxFQjqvVAWKUmaWucpsyjDAe32v3cHzdngv1NkNLqLMptyJ86qD8PszwvR1ajt6wRs3n1",
  "key18": "sVnokgT6B2j96RitMiv1DWqyvdnoSUeEQULfo9gnBy3PUgNsZBqYoYqZpsKD6hKKjkmKjVeLoaf1LjAtRYrPqze",
  "key19": "4pVPGDdip8hQCVz7mMA3JbqmDe8m57vh6dhZYiMA9zmiGZaaDntgZRkLcWJNX9j1n5kL82CCp59TuL4bNxe9yCoY",
  "key20": "4NFSUWrjYZ58q8mmtr2yuxwHoA4HS235jSXUzs1RdsjzXDDDu6UMj1mRwgzJGfvvTCW1neYQMwdRi3i1KS291Xmp",
  "key21": "5bfFZo1WBLj7PPpweDijuzj85ZphYBhcJ1zTDinGpYXraThSbfKH1L6sS6ukC9HKCu3tt5aRxKSLVA7kHoAb5cYX",
  "key22": "4sfhMsWiP2mvAVHLawYoUJQhuzbWT7fBFAsKTrKWPLxGPsGMBZqaDygFD1y856YzdNqcCN97A7UjPoDhQwEeCbzW",
  "key23": "2Jq7ALrekPM4zweBCJs3snW3Dq8n5vQY2VBUQdiRrsr3bg52JsuBeqSvK6v1dWiCd6thqAgRN3JEf2p3Sv3jqx1p",
  "key24": "4taffZ2JFfsk8ccMHpV1tTauMYJyuxxAZZJ75SEkvL7FfwuVoVPsjCXopnYDCGDRAnorXmDd28Yquibs6DHk4Xdd",
  "key25": "WiH1neKQPHio1EmxKsAPE4tSTrrX2AdEfqS5r1q9HkooAWE3MTYRKjv7eqMvE24TZiDtcDh6RnYvoTqytTQeoJV",
  "key26": "4YZsScNFDaPisq8i4TAWCDPhN9CaM76upnvN9vaehJ3AB5VEZUpjczZaEDM4h3B9iGZVEpCJnrh1ddKyxBPVSsB",
  "key27": "5Xk3sqxurMrQnBF42tav7VpXGUpk8B6fvYd5VM4Gp7tov2gRg3TcAPJFbTrptYcFbfNYY3DJXFFFQq5BfpG2MqWp",
  "key28": "2VEr3euBi9LCNuZ3dTVSLED4UxmAuDxsJELLmDxtiYzQL3qH4grzn6dpC4uGcLnwrnZDHRJT58q6ktt4m2wB1bdt",
  "key29": "3FDU5xo817mEj91GKkqHN3dTY8b4vScuPE8ohNDxQC87kviQoCerm64zkTtsBEB4qKqLXw2kaJhqND1Um7s4Vefh",
  "key30": "662ojPxNp2J7P14qvf5ubhzN9ZQdr3cZSukfPFyBwXamUmJMV9PrrKMe2VqmkzgDLR5raTjK86dN2ZHNMUYNeGT7",
  "key31": "2ZXrcCYgsZwAtr2kbpveznzhNYtKcLTMrFFy15RenaNSa44qhgLEZRcUeAQnc7V4P9knifCHnD5ehgcRH6Xz6qTy"
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
