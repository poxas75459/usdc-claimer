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
    "4V3oo2GirXoE3aXUy2WuFCBTtwcTaCUbnnSPfiZcVu2qBXfLbJLjaR6fcNpJxYxqfr6h87E7oFQxgG8mRxEzrGxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pNqJWLQtKb2eyWwRtsAVwQu7d9Lg5FGZRPNWn9L4Yc8hrLJ6x1WPqceGtQk7KhFQSdNerW4WMvoh9HPgzkd2tmx",
  "key1": "5zDyTJ19Ln9Rk6zatbGzMLC8msX8Em4zaJqVcEM5RyjwQCVNpzYiroCHP17cz9QPQdDfELq2BFhXjmkWD9gGdjjR",
  "key2": "3zCsvhCMDhgj2ewHmsSH5vMUiuwAcS93HgeJHXxwu9vDL39WMydwY6doamNhouW1GdCVf2QyAm9rNiFiRK5SPE7g",
  "key3": "21qETkTMbmph81ytzcr6omNwRaRGZX5kehZMenmU5fzX5uuW6h5Ecj4ZMAzkVmUmimd7RP7hv6isG2yreURn7a64",
  "key4": "55yaX8wkEXGVTDVxhvHtb4fGSyU4HJR984AxELo2MACDg4F2NzRiTtkL75kDqvSJQjw6RLBjogNHJesamYZE5Bwy",
  "key5": "4HPrmEJdkXNUMoJvG2ov5Z3pzP2YxdHuiCHRjpQtkcQkaPjHC9FFMXyght2vsnKndTKFjhsHZgGurJBiHjMK1YMu",
  "key6": "5XzwoMBUHesJb44qNNHrewG2DQGtmkzU1kLLQj4YsA83pXwvWNMLs2S9SL2fKuDiouDuH89tU5jn4UBh1ctgztFs",
  "key7": "3q23gQZQ3hQsxzXG8tUbUreCMSgyomdD4bqeuheqpwZiFsH8jKCEoeSf1GeZuknnn8HU8UVPnsxvvSLK5DfhQBFP",
  "key8": "nneWQsTKvmj2rrJ9o49ZbByW57aWyc3vvU1jZjKQRGm5zS2YCuwRZx1uxNpfKYDqJrtcevmhjYVx7fpKUX7W12X",
  "key9": "1FoNxN2mhMnop3fsqc2yPgzUcHuq5S7fPxBAVcpeSWBc29fQmJdC7pc4RSYwvL5BpCD6NBASZ4X5hWLEuynnUu5",
  "key10": "4gRiUNtp3GXvNbpKNA4EY3qjT6gtwDpiBnWZfx12d7yC7ihdb7sZBnbfAgtwVf1beNhU7mU4JLmQUPsnczngvfRw",
  "key11": "2A9c17HurZyBCiHcMooXkz6uW2EQX5FDxW824gr8p5Gd6T9hjmQP3KbsTR2tyJmYgZg9WW9Vkm8FiJXfNEGWh1Qw",
  "key12": "28vktBYEdkxecAEYbVJL4H8cWiuLUfjut4Khs6dvoH1NGWnDJc18WpYoWicJXScLHrV4xJFdyrBx9oAAKaR85eUS",
  "key13": "31VmXqpPHnSUNpyiWhBe5xuPXT6xvUJxAYML3116AjWrpa6VgQiqz8aYYSjW5EXiVeqdQVnYFQ8uCfSfG3zjQhUc",
  "key14": "bfoteFFDm41Q16ZrS6ck6WLuReC54gDLKQD1WtSmSkWK79ECKRpBidpHrGFNUgCGf4vRHvUdEQJeqk5ZuH2D2iH",
  "key15": "2i2ttKtsHWvT1jP2d6vaWjR23aJWEuLzsun7LZnVaS6P6nBmVsbEJ3NmjwvAMQeEXCcMuJJTk5KGQ1ACmvn83bP4",
  "key16": "51JwcKRG4agKfa64BvgGEA2Cw2ZSp3gwYtrCBKT3CnRkb8eFK4RxbAw3TzpJdhkosPnPenzu6S3s4GDGFssDWrMg",
  "key17": "48jMB4UkQmhN8fATptmwe71fh3cJMmzouZbzniBn184oJnUurfVNCdjpqpgwntWP7Qukk8yCYPSmCB9FY4rz9NSP",
  "key18": "5Ka1DMLrCv8iHNXwRiahsxfVUc5WTQtqwTXLuMLmbFP7Pnd5Q3F6V2AUvrCjqMbvYmsBCQFe4TKNEfeKJyfBhvH6",
  "key19": "4KAjPA761TXGKL8Hbah3J7Gi4snJFShGHxdgUG9dYumUv6T3g9UGBcjHd67qjrTfB1XGw7tfQHVS3h4MEFNtosv",
  "key20": "44LbdfzH7ZiLHDeUmfVb8yggTzmUHCxWUbVAurvTiPRicsHtiLVxDRKUMzMXq7FD68cLXp6vmyFwZMw3kt4Qn7tf",
  "key21": "3z3TfxdzohBEXTbWG2CN5CWKHeuX5QgVyb3AEpj9xNtZTFA7C9d1BQPFuGC4SwDZmcoSQXi8YVPPbdWrQ69JfQWX",
  "key22": "3oXQkcMAV6yD8QPWivYn3f7QEr4u8okTK9mH5k2yTFEz4FeSvCa2ff2VTaQKde1fG8bW215c5P5u6rzrcDwE1yAr",
  "key23": "3RWYYHi2AUMCRhNAoa33eqQc4rP5TedHUstkn5nAVX5PE1Y7HVsMRfcWgAgVz981oR6p2Y1ceipUGkzAs31FQ1ZG",
  "key24": "3BtjBkhsJqQgDM2nJnsRTNHbkEVCe6xehtVyeDrWefRHMsCFmBb257R2FTdQphz3cEyPhx6Sn7PqsVwKigM5NmMD",
  "key25": "4ugM6E8iVTcoyJhe3gmk5iSL8Qo8ohNj88HL2sL4NXDZkviXtKiK8hvRbzRkVrahKb8dYnoFu2zC2U6Vn3JW1iSJ",
  "key26": "4jhyAfmtkP2rYgNNNrLKxUsqmtC4S2nuMHKfJF6bLWArgLLnLRiaewcd1ctLsTxN9eNohdhggXKdSy3Uw7wDbtrU",
  "key27": "3xN1vEFSHG9MXzPENHEQTFLVBMYw7tUyqF8cx8vD63w16uCu9UujokKw12tdKU491AwjV6XWHD7TfeEkQ7b2Chyf",
  "key28": "3WCaeEQ9ZzPNrxfHhixnpL7wRrYDSQFFwVz1Wmei3dR9vXhQt7g9jERp2YKZhb6y4EC94T8XGCDYbyYhkxdTFdjv",
  "key29": "V85vtBgC2qyQ2nPXAwqqGTV74UdH2xRJLJ5Cuiz7J4VGtu6BCU6y7N7ApFC5FEcFvTh2579GqJhuPygGEyzN2tp",
  "key30": "3j6AAxtF7aiXXwVcif1WiXSB28dCY8RGhq59cAJpcNuekuFEo44TGUpFmt5ZeHTc2vc4YYLWaK3uAAsw1hW1XvDx",
  "key31": "3ZUGs4w7ECjqKBGgtVCt1RSac9GUUYXeVhvgYDn9As5Xgo7SFMgL42qQ4yuaDs6NhRNndo1QenVwwsFSaSd7x6BU",
  "key32": "4GR5DV8FQRcSZ5aDTCZrMCJSLnAESoTGDEbx8FTpVexwU5staoVUuYop8ZMNdkAfwtJjwQiSn4zfcRu7S8n2EDSb",
  "key33": "2XxpVg7zpQni7z4d62dNUbAUs6auSu8joEKiPf8L5phnKQhFkyF94DV7Xedzg5z62B8BrJR5hKG1PM1wiSnyFE9M",
  "key34": "2qUE2BjmKWMfmGekmYNX73jxK3NRYz4GNwm4gD17yZ4DyxMwD4RN8MAW3Hfd249htpivo1Ubg6X7skknnGKrgpqF",
  "key35": "y3Yz4pCuvNWiLN7HYXHFUL248fJ5EgAXVuAJwqmJUGejBrNdaVg7p5NbwTvvws2wj6XCwm55uDxtTMrirhC4owV",
  "key36": "486B5wDzZgF9dV9gpPJPuX51JRGjyiGP8Do7Cb1w3Sh91d55fgnNiGYBCxXyzBfhND4vycqxVexhBX5BeHbyBVhd",
  "key37": "QyD8LKSfZyPLGsGfyCdBDZpcWrRv2WrVkvYR3NDtoByYwnsvEMKH2JLQapKyoAKFSJGb1guUuruJ6U8TGb87fxA",
  "key38": "4UayGtKYpGqdwazqCk39i1T3mDNzsR5tErbeN6xQN3dFF5oHZA3hiFaQqoGFpCjTFsuj927BfoCWtmoCsBSFNivp",
  "key39": "5Dz5Fkoh7D1W8Eu8wfiQDaYnpjEFN6HEMuKkzSPQsJqN9aUPBAGR5DfN9MQE9eMUCDs9hWTLDeEijYnp2hw7BniQ",
  "key40": "Jej7yitfpkYoW2WcG5NdAxJa4siJmt4GgwweBEHJ1Fo5szNfKnfbG7A9uGV7fksDEsoN28eeYW8Q49qQUtAz1KL",
  "key41": "2CduPLAdasn6hEwcAPwyS5NeXGU6AvZLp93QC1o2QYBux9u6wWdi4iQ5uNv1kYcmz9ri5KZSmgoK8K8BPVTj9qWC"
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
