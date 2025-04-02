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
    "3UAp5SmMCB7JUWxh76djJLGuhu5oVbtvhonfwNiRUrTM1y7KNRY9WXEXRGQVfWmrC2vFN5Gr1fgA4cqDnaXpb6ys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LZyasuz2iF3tZJFZaFHvUQub6qBAkuaD37rEk4U3hnkZ1N8NiACR26w5LrXUuMoRnEtNTqa1BceUKHpGUNsHGpy",
  "key1": "JV4m2evGNJaMP29HSoce8mEtsCLrFHCf2GJghtdYgMi1Qgr1wuf2Qys8ewfrgJpED95G3grrkqxiXYCJTVxTw58",
  "key2": "4EXbCSEJrZ1MMJqJZFy8dizV78PVz4v4F59ediTcC1y1Utm5owPv281NVJy6VxMfQtpzQt5tsUky3hN7TFUmbs8v",
  "key3": "4sDsPkJa9XDv228LWj8JP5NRaugYjqUbb7K2aWuNUmvWb3U53sJUFfztZ3swkhtvDXWNr3TRLVo6hLdWWSGF75kn",
  "key4": "aq5rBj8axweCrf8C8mdZz3DvmXTQHroX67vKADpPwv2H7Uo4a6Rz5WqDjjxzVxwaHqSjuGkdgDNNNEPBmdfiFiG",
  "key5": "4QAamGhR7V54MQREjhzATQPbLrutR7KE5ANK4ynVH4aXcUkgoEow7YGoqr3fLHem1NDcm3wGDACgzGsxmuspZhAm",
  "key6": "451fJGz9oFRHLCVqg6UqvUyf9LXgMujL2aK2FHegYgJHFQ7dA8KhNdtYy3aFoyH5pp1ZPmJsi9YgJMQ72NbznkFq",
  "key7": "5541hRd7K2H1u99kztDKgsw9GnWJh9viMYfX2D2q6dKDhAaQFykTczkmjoEVfmRHgbrHAPVgNUTjSPe6joT5YXUw",
  "key8": "2u3CXue4CxkQjqq3HW4Qyp52PjnFLFWW2DfB1xCMuz2eZMyZu5hbUg7qLRuDQLnv1R5jv9jtmbCURXPzjcmEEKLC",
  "key9": "zGtJ9tGE9ja3Lz6C2a4d4bU2z4VJJxBRMWWKV2Be7pruvJbRYKMR9q7gWtHwrfpEMtKoTU51zAZPyr1LnKATjxB",
  "key10": "2Lr6QH718w68M17moGh86gabKnjxR5xMe8dgqCUGHrBMrcoDoMLjmJBgLzbSmH8eq4syFmAbuDCT46qpMrXdrKYH",
  "key11": "eD6ncj9eFeuCbVntFfWAH4dLeX8hM4U4T4b1VEShUVuBsoHFSLzq3pRUQAhmaaUxYwSjnLfxR9CMGjvC2UVWzBb",
  "key12": "NngqihdabGXWiAkvgFT4FcuA3hXgoRp9FccqySg3wnivtLP8h6PtADFUj3CmFtcx8tGm2fUUJd1SN4faisHfMS5",
  "key13": "49H22o8UvPXjZM2g6iJYWZVa9d2BVcL1ev1FTk7nrxNDJQxE8xyN9TeppfVE4kCg8XvwgZxNWjZQHVJdR6YRqTzW",
  "key14": "2SFACsEZKAiKHiYC11SYooJQy93qE9K4B2UKrNKYCi8heDeQeAnTSfuL7s9wxWSvbFfVrvef5PPCPERPZDQLPqKh",
  "key15": "3QrBjdMicSjFQ6MoiRW1zjP2yrmc9wuSiZ3VgvCQ6GU7uf9H2NiWFYyFkk2zpcrqpyPDPVQJC9tztA8MF4CJBsHq",
  "key16": "4GtZVX77tktc31K7VbSKc69VVT2h5TDkJLc5keJWaoTPqj8HWWv3PRDdzN4v2oXEtjp7VWNeQ3S9XczciRPF4aXN",
  "key17": "ZdWWpBjKxA7kyxkcz2SoESPHt7bCETDppTcHwVSGTjNz97EJTAxhYF4NiGWj6e3mtSXRjJQ3himFiYcCFwvg2CW",
  "key18": "2q2FZUsJVQGEsUArRK8UpAJLNnY2ePf9TemgfpaAHXYNCad1rxmdCs6ZFDuAuTVnRy1HqF5ydd8sgGCpCeskzsNy",
  "key19": "rS3Pg2mCgmLza8r5F7nkRfQSBDqksoLaRxAf6DQzwKKhCFxFBfYanAMwyVtWTuzMNNfoAQjsfLwk9Rgnmm1q6eA",
  "key20": "WpcpZN4HM6EFB6x888x51wnutYSV6U7XzSpdd2qcE7dkWH1ACkHpKFMRmSUQCdhuFuHLe5pKQSzbpcio8HPNzfV",
  "key21": "5uofi5uk7rnQfn2qixcFPnBoQLCL3z7JpUQ1h4HYApFtnXCDKPjFhZJM2MYLPjobGVzQFDgUgQqMHcpB8vCFrzrX",
  "key22": "5URHoTGaUibLsezksCF1qRfrSJJCUKdzhKk2DjCFB937tdhBDt6Vj3iwMYPiWhyjLSRnMaVq6dyrzdrRvegRHEkP",
  "key23": "UzvaYLDsTJMX8bsK2tiJsnogT29eXuEyK1MZMAKEp2p3UDv35aqX2LFzCuQyUiLv69n2EqDToDPnLyBt7xmxBCF",
  "key24": "e6GNhfWgHvt4dKzos5k85NjLtGCGXzD6NrFGLsjcH6cV5puQcRf6RNDz4H864vrsaWua2RNXkmrtwwsBQNiK5GK",
  "key25": "2mVhG7TDzLqYq73ycTUaVroqKSJ48VEki3ayqx86wmXguLkizHXJMrxiX14cGahg19amNQPXDU4Q8WUV8h7JTihn",
  "key26": "35x4FVxwHQ6zuW7B1H4FB1KCFVXbXjmcTfLBPNoHWKUEGayivmxai7du6CQWzseV13XpVfGrqHJNt5GadQM89cqF",
  "key27": "stg8RPXNbG7Rcf91y7QrpvzBkEv9CsQaQLx6Bzc2QwqKVqAhaC35rvkvQNuRKg2nm5tCN7KzbnZCYRNmrVKAKRd",
  "key28": "4DVc9ArZMDa8hMxBZm3sFxseFNdxKGr2Mib8AfNkM7QqwBdbqjjk6Y9GrHGg6idAus8RSxi87Tu3FwVEB4UcNcWH",
  "key29": "2sZk8qB2fTxoghW6ciMfr9igN7WfqmoDfJA5HBhJAxqMo2aECahEGKLUbxeRwUW7RoUTe9oDgM1XG8knpXNcMkFr",
  "key30": "5YsP1RMjy1wmwNCBAbkDgwUsqSXb8ma5CTQdSCSAVAxwMbfsd56ygAL4FP8x5b2UkQEUrrW3Qzq35t2GbzD7v6KE",
  "key31": "4pmbHeixD82pSpyFv96GWCTo7Npjv77TTGr6LbtRBUKWgENcgogqEByy8uDMcfnaSBHoc44JsiFkLFazGhwN2kAt",
  "key32": "3rzY3i2PF7MSNYpv8H5NsfiByra8Wfyn1qPmdfZkKHDFCoQXMNdEsyjDUj1dF3pC4yhhLZVkxTQ68fTtxNPbumap",
  "key33": "4EYE4WSivGo7xWhvofZtA5cycFYShL86oikXsuXkMwQ5U9gJM73fUT1YPrG8c7SyiLSmJywZMZBJqAybrD3AjtTx",
  "key34": "5K1SdcADiPHEK3Jx42kkvUkwCLVGJkwbktKcqNuCsXPaDLJgAeC8sX3dHBKJjkzszi54j97tSFN2wYJK3dv8ffTx",
  "key35": "6RGRz6XG2JQBaPdBPYKsTVxpV2m9vHKrhtpHy6f9m1VwMZkDJ8Qmn7gMz6cE1RDNsRQcuRoZHq6AV1cZmu5EEHh",
  "key36": "5hVWR4oVKC8yvKxaWf7UJsFoeRwuWzwRUt6ajMCvUstuPRwZfuq5Pw1qrZc9YvurLkQ2M7atLD2JTuciLujMWbbQ"
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
