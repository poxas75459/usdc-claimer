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
    "3NwCu6LRkNvKdsgGmq3a9GqWrRkV7531iABymC3hmXgFzRjuHcJCHcPaTJqHVuEcB2XAeW8gXKxAuPdmaM9kaFMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zHm5W5LgQr7Q1GkgTB1qwmDqxWcLyGmyiNCouEHYAJboQzzijVNDotdx7HMFodRsrsUaunbiFK7Bcqq2ou38mWG",
  "key1": "3PMno9VtNS9w562Ew5a83o7JNbgozV5WCWiQ7tqLfjwQx7fDTXgJeMdU5CCDTX9xFat5f5xNwd8XHUtFt9VsBcFd",
  "key2": "3Fj7sDgucANWeNcZzQqzmZkYLKj4C1K47FnmdLqGdoCk7Z3HkThCfaD57BRQXvUDPnZyhWR7qhbzkV6vPo6RaetD",
  "key3": "325VEqYLN5za7qGDPM4GNg6xpGmwKcK3mmmSzfLznUgfcPaKzuk8skHJhrqYh3P2UPNtGmiUmtu9V3q4YgHAnGAr",
  "key4": "2XSmP5Fyumcn5N48vCmRVFDQQrXwF1TJcYq8enXfvEEaGpCvAC6LV3nnK2ah4aKV2iRgQu54CWeZSKCwMVHhJyWd",
  "key5": "4mM7S1gXEJRHgSXjwHiR3WREMLPB4wwHEMidmU4KNNtDhKQcEprh8zdwzp85KqMYNVZFh2iKA2kxN85t2ptQNTLP",
  "key6": "GA7chqFRLCN6cLt5Wr39vM5Hmb7MKQy7t3aCpnmFP2K6Hq1auwL9hD5T18kv9NaCBwzD8dCoPnPP2GymAJnE2Ni",
  "key7": "2NTkhREuyyRdW9fRAY1RyXk2KRUgW38zg1dGLuxDpeqa6saNBfTu3P5A9YTK5B4Uh8MVFFczCDmUc1AN9b6CKuHa",
  "key8": "4w7f7RDv8jg8cUUnbRfhVF11FvgJeAdHgFPeK2J6dpeKdPK7hvjR8YgMX9mtEhmeaVzkxirPd3zjsZt691ijW3DJ",
  "key9": "h6HQzdVfuHKFCRHYFRnDTNQ93HBXy9QnLhXkB7VubuhcJyeeSsQfqf9uAQ3MUjsDLuNEam7NrK3vD4RB6k8DHqD",
  "key10": "qSMWnoeE8DnxZQR4ePUTYyMT52E1gpZn6PvtddiwqbP2JVHyRhTgyGib86WM5tKArHbAcub7pwQJVVFcam9B2u1",
  "key11": "2QkXCLCBHeJnG7NaAJMt3G1TujbgAHfaqzxRbZXEFa4nqzZpzjDSG1vEeyFBWh96xbKbMFy5tJJHCtXLfgWmpBW9",
  "key12": "3JaZq1adXktnZQa8bGH8CYgAnvDVChbAVeume24GxiP8vzjQTSSck6NiMjNNVtPKtEPyJVFFdU2GHj7FCSWNuzNE",
  "key13": "xkvrGSXHSE6AikdhCfNLzbKtcV9WaYgPWqDbFBMZP29CYzG24wwj88L4T2MzVsmc7pqDFmheFyYSGGKNV6NoKw8",
  "key14": "4NSqfwqTDmEjNpqKCsHGSHm29aheLeCQPtydiq5Co9EARgqqdFSTE6Ggtb3Qjvu13k7uLAb8pcuV3uUFqqmnbnUT",
  "key15": "27Cp1Fb2z784HnEZjDvaEE3Rahs5VAuDucU4P5Wzy3FWADY7nW9sQc1pXbxUZUgz6TLjzZC2bWv9gRzAsxMNdo66",
  "key16": "9Ftw6mzEBmS3Nj2dm7CecqKprtNKHVJawXfGVgw9CLb4ycPM5NwVm9fVT6szNHtpnrFesCvVKruPdFsxg3ksUkK",
  "key17": "3x6cwLxLd1j1XPRUW5Dbu3d8JgjHTCqadTdVBzW13Ghtn7YRLDDSrnoVdiQPRxQMKgyNGqMYHv6kMEdhQr32RYHk",
  "key18": "4aQBsY5e9h7mocyq7kHL63JNLHrH5NfNyppeRpqvW3gNiCG5jtpfHtNcN7SunLoPvNAMaHY1obcfj6W3pJ69eUTc",
  "key19": "5GG3vr9fV9ThFBXUEj95J3nHkQknPbX3EBrahQWJFway4tdkY1NQDXRCgYNin8cARixRG9KDjDfciYNQc6hufv7H",
  "key20": "xu8kucSyekTZrX9jWshbbp7qL47S9RyRNkm4fqUSqahh5APx3K1Z2KWH1D4wtMVKnb7ihZMM4HAxp5hUu6HR2ZF",
  "key21": "2zvqqS63MPbeRudYiT7YsHTzRfsjBcUF1BZvoR65Wz7ADczo6sJnvoCNxW8W9dESL7avhnG7C9s6kuTh2sqgpVr5",
  "key22": "5CT3FCSNeCspsYx8nDxdpVAwSfsFKejgkkUxChvwvBLoU2j9kZMXbAVUn9HvDRV8KBDHofTXNnRJ9cuyuU7eW9G9",
  "key23": "2Ec3UPaLmAo3jxGvSHzL5B4AQ8XPV9nev4fzWFyvCCavhXxkzn4ed7HXBbSbv5PUmS7E4EUA21E26wPUMeYnp8sa",
  "key24": "2HCHvbFjYEfoXtBz8ARxMkbMq3guxS39W8oXFh5g5JddjCVSAHMytjF1uLDLVwPux317xPExd8nKksoC2mTGy7CP",
  "key25": "JPir2r4ZqEVdiYLUQ9j6LNz64f5ZrYvqs3nqCQETtzjDAgvbU15xFt3bkT1PMNqqnVZtbbyFdmfcdNVNroLB5G7",
  "key26": "225BiMmqnU2PrabA8PZSQAEzrZnvPKwdp2a8UmKwyqtvuwQnR46MMaU2e5JfPFCN94PSwwqpSkvWUtNtqfyP9JgP",
  "key27": "2KYf4ubqhFEjRUdybWP63fUzvM5WMuAfKwdGiCRYi2t5e4JJHqDTGHPPyAVxcPJKoZqT9rHKCyyizo9kUPpS8U4W",
  "key28": "3bZFvg7PaydMoBJv1Dm6Y2mozyEHZxyDtrGENXFegMFYaLX1pdrnBKyirSfcPCXe5UsXZAC7Yovkm4hc4LzCyRXW",
  "key29": "5UF19Aaooc5FVeWrxtbaQsYKZcai9XpkdzVVHyUsTdwckme2wLnGsCmaJg8ywTqwC3e1suVeRtzs9WYhwVV4iYRX",
  "key30": "4SVLaixUsR2UXsBCpahgFhuqAD8Hd9T4Hadr8zDExdtFYwG9mWqocjafcG3B9PTRMWBSYjxdrHrFpMLAeofoTqF5",
  "key31": "3fsxGePw2dUw1cWrf9NSwPE2P8bpDYmNgcru3xxoX9vrNBd7Bph5HupgFF3JXAPH3pD9zF14XHxtT2WrXZSHeAjV",
  "key32": "3mskbuehNQ7pKyAfvDtWeSeqBJHcQ9SME3LbYupCq4ULU3kJ1uiTGEMWsPC5D1hbas7VSrQ3Sg32iwPFGbhx5yob",
  "key33": "5PLLGaH4aFSDxRTSRUeG6dYpyLjRBWG9keM939UWvzXqh9TnwRz1EtWw4JgH1dmBXQ3tYTXPFSvo3xnRjn3F7abm",
  "key34": "2XyxN1pBfqijbYTwsggmwyJDQUf4QU1dogKPPa9WDRGMxpnNCjac3CacEQcAh25TQb4tjfQ1rNU9Ckc4uLy3eigy",
  "key35": "3hCjr3HoUva8sYFQ4SYSqntNQPKby6MWvaV72d4eadd6hazPhr6evthLgZRgr1EBkhghxPhSa29zxffAwwipvSYy",
  "key36": "5FekrGumeNwVqNi4hHwXoXusMZ2JQBrdoGH7H4vcwYh1MzaUTZgUwnZqvpocw8XoNGkuXzbER5p2FqFSvcwywXDY",
  "key37": "5ZgK9Rnwv4ykLHxqu2vz3oBsc5pFC2t6Jt5NFLWAYeRCKtXGx8PY3E8iU2eL3g3F8odqwrCDTVMcsgZhaFNSy6vr"
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
