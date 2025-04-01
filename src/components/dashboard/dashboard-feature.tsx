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
    "LAWZG7f8SsCpm9rD3LWwBznfscWTxpxqjHaP5wqrnPNq1hawQVR6AnyCCPZPBfFc3YQ2kuAxN9WBGYbfX2GXnxS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NnAg7BzKdYiCYJeJgqDnCrQrtqxgBzaErXh2j9GRZorn5RaaXBnVMTDSJsKS2GrZNS9rmj26NXwDRxtoT8HMZiw",
  "key1": "5fGUVWYUmXxwriJTYv54rqYqjtQHNHrCwqeTz25E3LkNeBgDwwq9xpseW2JYBD8yvgP8iMpJfWitw5zTMAEkswzp",
  "key2": "3M9qDpemSw4Jvu9WfA9J2ksk2mqsJLHDLDUFXS3bhuHVLbbxVza4arT2BpwsCqktKJyLEnU1kXwaF2ADbF5KQ78A",
  "key3": "4K2cBtmK4arWyJQav7sR9cT2CyR8FM3ZtRpgzi2upcHK4XJwLafxMio89DCJLKujiDDf8FRywfZH3q9DxRzZw1ev",
  "key4": "13huTad2rv5wmPYs1w48c1THDZemuhDM5gU15ieMNFdCcVsKrhcBnXPugNu8Ch1sPm297ymriGUcSCqwB2CNc1R",
  "key5": "3amCUUxLFuQZUhermYRpxCBTe6nbbzBebSMwVmYZwGwfCtLnEstcH1DyCkB3rXc4g32TWquV8gqY71B9Z9BVvb1x",
  "key6": "i8DX475qvYcVU9myKaAG7SGiKoFciGQBc4iJYfKhAWMeacbsXCGPzTeXLrP9P6ZguMCEorn1eDnQgL3t1QKpzPu",
  "key7": "2NeFLGsue3PCiMypQZ2z48DfhxVKssZee1ZNokt4oJdPgXFAEQfD5rEawNpTD6s7wYYc51BNEscZhi4W3KzmDKb9",
  "key8": "2A7pLjVq9qW65XDRNLeHqrwwa4XhopGk94cqzwfe3ypSVbSp1HSx6CE8iCPpYJ9NLQrSeKYU43wyiP3DKW12YMgp",
  "key9": "4pGDtVcQQRgHQiqZ416jEk4Puq29zNtuWYvqJiH9ZkMgasttV91BbwP9DL5ubPH8QvcS1ZKPjTTCzK1pvJqAkZnx",
  "key10": "PavoVCriiSoovVRzpRg1AowTN8PcHJqKcLYZ5GcnSFU51mWgX5TURti7UMBbd8Vie9TqT81GCPu8N7dRZBviEJx",
  "key11": "2Af8ycM5RDUbkoafGqZ2Lu2MvLDRsFQwd2qQQKShkDauexTeXSVKSTwbJ8E2yJpJJqh2n4nrqBfpAWrnXBwDYpvz",
  "key12": "5oqsKG8Rj5vUPHTJSfX2b3EPEvrEwcNNUG9gbp1GyT6Av7dPgnRqVupz7h4E56dLcsKuiPPEgwJDd7Ha9b2Shbzb",
  "key13": "2k26apXrEBHQxTPae7SxRsDwQ4JXUvWhzB2EGQLM2dhnxAaS1iaQrpRNvDHbiKrRNNUp57bHbHKYRDqCe3bbgSJ9",
  "key14": "4xqhkR4qUYatMaMUQwBHyyu5YrAysQXuxeTLeLzvKEQ1hheSjLaG8hxWobkwW31H2q5GsmdRmajuxndDxkKBJzXa",
  "key15": "2G2PDQaMVUQ3qVaXfkChNqCMKJbg4a62NfRsTG7C8iuWtbp2oaasbwfRk5uxbeoMnN1fvVj869tizednm5PNj5Z9",
  "key16": "SpWegj3agzdFNsiQcmxUUHrv6TQEgJJt5cUbVxE7b68QMkdFtDvW1WGU1A7b5SsBoeVrc7icCjXHcuGpRh5wmvd",
  "key17": "26oVuv6WbUBLp2ybDXfetAEN1kX8FCjZfySKy7rvUXDug6wcxxmn2n5aZZDuSUyEwQ8eYyiSBS9QW8VyXvh9kWe3",
  "key18": "31RJHuyLTsbTYLV6BREUE6HeMiHTLRAyid8EkwDwktXnKWXbpL2aNx1xkseSqYaXW2HE23RZWBRMaFkB4UfW6WTX",
  "key19": "5FcYPDDqgbSHURC9V1tKbtNwFeKHRbwSQu3B1Gwcg48d8yTpf8NYQ7ShPCCHJVKCWiEtDXpyFY4S8nwEnamKXt7Y",
  "key20": "4iRy9vSt45mKk5cQbxTuT5rEuEF3BYfEYwe2AED2CDJyPfxJceivPPzLBM8gMiPGNVmPBi3rej1mqi3122VnkgHK",
  "key21": "5fuo3PbH9k6f7oAG1eFQj72ibUhgmAPtzqFadwJusXEf94ywsV1gKLzXapVykBH2vZd86cPbnyMDAwWncshJA7iF",
  "key22": "3TnpHQQKHgiZ7eR6zp4i4HyhCNzFEbWm5fwNUETEys6AVtXwtdZkVSYZFc2ngxKzvokswqdY2SxG4MTr3dTdPGdG",
  "key23": "5pEyHdFseyqpudt1RTdduRYhUGh85j4WzvUPiQN947j5sw96PYKtUeKrYBcShqzrSCvSNc6eTsctyAZLyC7EH1Di",
  "key24": "4fKSKiK3eu4fvecp1qr467PaeoHAaW2CXxYGjiAFXN28ZoPxFuacPxaFVv5tPxvFUTEQMFE1z4gdteDm86SDFi8K",
  "key25": "8AdXqcqBXi3TgHFyCi9GWgXS953isHkr6kMSUW8qG5oYvBYWVPsEhqJ4BGYA3f7mZZafGMvMtYF7FNosf4R265w",
  "key26": "ozjVKVsxmtukJ9Wa8QrXbK2sDJywfYnxbi8XRVbdUi9f1ek8MfyJQuJ5jAc2kTDiNatqwPJTeSr7Vmw3B58dzis",
  "key27": "U8GQU87Ex648oRqWL8PVMtuRMbbvTCeAutFbtfqpkUuYMuSBMMizURdvg3Q31yXBHYzYBTPDKwu5FSJuXiCTyBT",
  "key28": "2cKwQQY1jY4cfC6wRBbx18gNkJDsTg3hG3ZasgT6GfNP21qDec1bmVpqUKWKtsMmtajVM65vy4TYKQxCPsUzjN8b",
  "key29": "gdfwaPAn9oVbfD5EiCUAHJt9gdC2tnFiujgELUhGhekPx5fDzzi7fWWMQASdgKEVsn1xEANA5EP75BSCfKu6BCQ",
  "key30": "2nEMKwU5DjY6D22Ly4ozXQBnXPVBuF7GkhBsnAK7cTMCqiw5uUu6uby9MAA4ySTiLrsZte9bSFbnAyaDkVM8fv9R",
  "key31": "3B52dboNVHUgkwPsW7ZqW48gWmaxG2xZWZejfKodjWBTKZiAanrGfr5AUQuqLgRECab8SUHnSEgA29HUSa54Zhjm",
  "key32": "5TFz7oHSo3PK1GEEUcpLCrxeLbmm9zPgW6Yxib2vgDpgBTxYtniyQtBVvDBx26xMGK57zZRW8zhH5KrMHjcytN7P",
  "key33": "36VvLCqhhcedorM6RjrfEKDZKEcB1W24BdCuQ2S4PNvhpGGLQQT6MWrmHCnurHhLxE2hJw4XVjzGuRyTNgQkfNHZ",
  "key34": "3SSXqxemTduZEELoPtqHSs5BPcJ5SkB4ehVZUCLGxG2GCzfcJfwg7RzxQJh5keEtpdzwC9vtfZFRb2TckMoMjkc5",
  "key35": "d6JhvonHnPjqdXpHcEmasZKhDLFt39UuC4t8iLHzLfS2JmTrt3P2rh3Af119rCF5Jf6qkFWfcakXbv1hmdMPhtc",
  "key36": "5nzQrLoV7XvSNCmZYBt6xTx8wcWi9Z2go8yms4noZ2AEc5EDHWzPicp6dNXs8NgJ497raMGRooLxrqb71q2xLfH",
  "key37": "2Fg64X4pnWLr2ZXen5PBNhX5gBHpFQxSiAVyzx2CcDxKtA5Gua1eUHpoexVPqU7hVC576zLAt3jhcWn4kco8YMki",
  "key38": "S2k9HRdnJXhtE3H92iBQCdWDgpVL1VVtSPLDJ8eKUT2n41ncEX4mVmvALmkmaD1nHnHHXtQznTKWHGvLVgwb75E",
  "key39": "2hxTqM1MfC4AZ7QNvyDWjRrgj32a5cHKcwonyZBbmVaov1piqc37N3rpEcWaj9iyKzEjMEby9Csfx3nDcjB1VUo"
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
