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
    "3HaTPDpwcrRo3x8akrra6T2k8t7vHP8cZJfMg4QzZM7Sgmv7MMVbKeuusrLMpMkTiitV8wAtyQ2KvVPMH6ahcXZv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uq9QQUvrV4EFdc77Bb2FFD746q4kna9EyMsr9jo9QtQJ3iUmDEsSgjY9VxQ6C6rPMYcyKiGoveUSBJWY1A4pJ9C",
  "key1": "4BXAHviDLZWSkZYuoe8CPT74aokAkBkj1KiBfw9ZtJZhXhqGgxMPUuckiv3sbM1vfhSM9pHECSzNSx9LcTpjrytD",
  "key2": "3u5REYRPRK5w1DUhkFQxQGrERFKbcnbmhxnCAyK5gXA6gQHLmfNAp6fWT1NrsnKRYJNo4uwe6MyQ6ArWAvcxMfK8",
  "key3": "5aevDFTjXPiTEUyGB5A1EmcSruLt48HK1Vc1BRt7pk3NKjtLgbE8xK9udm2fLAFaAV2RNLQHQoWMhkAgB4p8VKpG",
  "key4": "591594bRW2Gk5iEBRwy8bYeFeKZbxwuVBewKuAoaRRVQgwLNJXDCsLUw9h1tNs4QQn14r13mnnCHpHAPtpUQ2qGa",
  "key5": "47pHJU5RDLq2NzbR5xsWRFWcxTxicf6fmBnhJmf5So6TKpgnahx72WNarRtbeh1uNjePBkRtLD7BL6X3MERx2ae4",
  "key6": "3ReY9TUkGHZJHj2fP3bpGakheEhzTYJxea1zKDq9oK1svCyXW7eriuquEc1WAcc1WvWjRkGpB7nUnAHWxbMYJEnd",
  "key7": "4B5yBUBWQiynDS9kYnFKv4nFegAjh4xN72BtCv3Ki9k6Z2M1t5fpiW6M1z3fRgU1kG1wPLMi8u4c2vAvtwJoYTK2",
  "key8": "5oFmJAQetPdb8n7s9JVHJrdbX8GWzTqousdNe4zMjZA4iG5xFkuFunvdmApU5HqvWBGapgj5grCZVwUCBnhx2Ly1",
  "key9": "3XVDE3YLQVL2grFdkrczq1ELqNCBrHX8kRfmoANhXvNUJdK3qNzhYhoEHVTMseQ9E1fDTqDNZPaRH3WaGWScsSSQ",
  "key10": "4Pi2bv2dCXGTdH2uxE1RRhkwep64kaS2ekz64bp5SYnEdbp811mtAaajTetiYjA6UXgycVGs9i3rsMWTNzPhZASS",
  "key11": "5YhYrKUAqRg8UgJ1SBw4pkUfgx9G4hErDkUoEAjQcufKo89LZB7kV2xg62ScQFh82pDHmTFAfQr41kEs4KxS27oa",
  "key12": "53i44xtgVydivSfkoxpeNxVVcBjTTRDhJaDpQFGbzfk9qePdZSSVbHB3YfNjzRJCPgMpM5yxQtGLB4qoSoj4Vtuw",
  "key13": "2cuFy7gPimsTD59zZM2JkJHY8hKE4qFj32GkdSNjFpmTXJj3EWm7cd4X5RU3M9WiNYH3Gz9BdR7LwERHxrGbv6m6",
  "key14": "85ze8xVMdtfcjCdyvG1uZwx9MuVwXr1w9aMD9nsSpe4TRY4Bg2SQxAb4KqrjkA8ZrdNkh7ARMCa7afxi1wK1VSR",
  "key15": "4mQfn7zKseCuWhAUfoUpnLQfXTjkfTBqFpswGoxWN3hoH3cDtpbgkJxLzZ3b4Q48J91nJC9WqHpGZjfywcKS3Ats",
  "key16": "4ruG92jbUSbqPAv4q3goAALED6sr5FhVsvEphqYhiFBXR5uiu4YwjKzasWx5qzK3HZQRhhffzejXWXCykkr2p49",
  "key17": "4J8FJ61vpwSavYPSWAvoCdDV4U27K5f51tXnGRCVGsM9VbUjTYXVqw7apfvPBXuj2bwnzrzTm7CETbmrR3pbg3fr",
  "key18": "14NoJev7qsajT33GBMPPDBBGjAnCHARVhEYcGWEucgi4EyYrUC3grvc1tApefAoi64ciJSHiw91ckMaAEyjcxnq",
  "key19": "xb6NpxfqVuWJNYQaCY7PKQMMnTWuXBrBQKxZjTpYy7apXoEgQ3KtWocWmPeRF2r4CDqdYFnkvM2mB2182S5w3MR",
  "key20": "1ZUu4A4r3NCTNupZ58RyhCVsULgSn52azHdhgMHxuBs2MJmqA6hV6r9patg9zzsjs7SPSA1EAMTBCsdGTAvogeu",
  "key21": "5eEV4ynD4xZn9ULBVgomCD7REy37xsAVKwHA6sCrAKHmoD4BonZsBVgm23G3JvPjSCpVvsLsVFEJKJic2pFZy9HG",
  "key22": "F6YuSdewQebVmtGSasrpffszbWJVmxkPoNZyS2d56M9Fn1qyjwbQH5GnrbsAwiNPYufUqcxbHzB3aJoAbAy29Ma",
  "key23": "2zvhpTGdrX4vyMYPYUqKtkh4JzVwE9B4z16ozfb6Ct5JHP389yfk98bVeBmKWPGafxgLRaxLttr2x3HvG5DJTxjq",
  "key24": "3FGrvhWf3ZXJS2iXiuTuoARpGkyJcY9MUcPe8xtTVcF2RZwQPUcFPHLn3uD1Yd5aH4wZs5NE6zefZ1PiLCNw8BMS",
  "key25": "5Vth4ERUDGcB43pT4PHsux4oMruB5EyAnb59eY8bzpbL5YNig4WBvg2oUe1A8N5iGHzBbj6ygYDSiDVAEfYYgJHw",
  "key26": "31bbQG7MnyauFDU9Gauw84LsJ4nNkhfMkMojh9pCNs4Fzrh8JPZFqR7ymJLhouLt8z4hLkyZmg9kJFU8wM8WZvdk",
  "key27": "49LkVeQ6P2kfuN2UTFtQCtjpCsmGob64X6URz9uzzBZdVyxieRKALaB4Vvqpn1a2TCXKZ4JuhNo4XPWFvVRmRtdr",
  "key28": "5Z7Zxvgs8EgDFVKdGVDS7cSHVyout8ZMyRmvT7F9Bao9NvpXiwsmQkKBSRtbYxV17UtJsRrE1S7cCcfkuR8SGi2",
  "key29": "4ZTMa5ug7pnXBTsLH7bkKWB2CAw3YDPEqQ39s1wf9ox2HpeeprmuQsPf4TcFAHqNFVai4QKfTVNSDV8rZVUwDjcn",
  "key30": "4TMXoqHxXD4bGXNVBAeans7MnhFE7ZWrCNXbmFTz12roHGdCuRCtbEVbVij1A4M4CStSn811wAhR3mHVANZRy3vT",
  "key31": "4QPJKrCVuD3skgFrFjRJoVxNEU6xhnPvzgdVewnDfZS8qauLMmpTQJuZZA1SuRFjbqN7SzB5Cu8WNWYjuQ78BNpJ",
  "key32": "2rcdquLyzXEKT6fbNG57GPNymSWwXnZcWnV4xEay9TKnxmJc6we6RvFVEa6CdymtkeoWZcG7bvE7x8ovwNmUsSTk",
  "key33": "4j47JWPoHSKaiYM1yYUHHchSkXEXiD4dgNWzwnMtsx9gbf1a7QVhCncsZ5bGN3hHQLnmVig7qvo5gTZpGJLzcMp4"
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
