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
    "3XQ1r3Anu1aqwW3qv62W5xqi8TCHDd9APTg6NtQ9nV1pgvNUkgU7kuQBX5mZ71zRD73WU2dSUiXbr7ghEdqtErAo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FMmYJuE6xfDdD36PGS7UHHW1GCDDVeMh7EzkCytW6SdJJ8sGK68vzjZN4TmYWgBXn7KofeXicdLCCh5Lr3ZSPum",
  "key1": "5bAqfzZcMLKuuJj6oGgXDiy3P2yaJ6La6Tmtffe5ZmMp95VdHRjDKUV1W9NiReVm5G5jEUk9JEVgPpP9wxqQvxHp",
  "key2": "4v9PCpRi8roFqWcqccDkwgMzX3BHGvcQMx6wHRkFbFScWLkmkbGYCQnC7Tw6xMcfT1T98qxkvRvhAyvGa7Sset5b",
  "key3": "4ihJVSTLgp3k1c61GMa5CymNXiqjEj4qSe7VEh11yKkYjFXHsbnDPxCAkKTKPM7bW5Q17YyzrELbSmUQQHdhPgYV",
  "key4": "5VHq9ndzoUe3vtdVTe5stVFNN3Sa8STcmNhf2XxMZhfsi95yuvXvZ5V13uPrFVBWn29oFaZWJQN3ZJT8K2qBJ3XD",
  "key5": "59m5AsY3mRDr2wiDhXxfwwC5bhjoZ7ueyMoVrR8LhtgbkzQM858bBGVkCd9pZgUXhvG6EaPTqnm7Xyqanjv5VA42",
  "key6": "5dBN4K9T9nhnhcr4fPzcfr8gjfYC5xsMMV4ZE9sFh72DR1YGfaWychHGqmsFyeYzacvxy6d1TD6iy7PpWAj4KDVt",
  "key7": "4ohUn3j2kpy6e47FReSr4SaGZb6J9jPCaVoHK3Y6YZvxUYUotfatA1SX9xyqFTu9MTw4DvcmRbnw9DGb33bHGkvu",
  "key8": "5TNdij51BNu2HynHGvYpgcqVAVtJznRiYC9fmPo7x1XD7isFZqw36wocZHrrXWjRwqFyUtv3fZf3WAmmysv6DE1U",
  "key9": "b32RwjLvyWzGD6EZyy7ohxNQ6NZeuVBeQxHBZNc4FCWB377fWsjtPZjsKuw3GgQM1ouft6HZGCLDFcf7jzMfUCc",
  "key10": "2ESRCEVjna1Nx7hmwfVqfEg6fwzdgy9JxmL8iMQMdNeeuZ4r9Nj4nk7bruqQHEfj6t6ZHLaUgiCgrHruZKteigQo",
  "key11": "3gt54vN3vDqCfwcja39RSD3dUpt6tArDAfqMcYrsJSp1zXWBr91svDjwZDJ9FwEv2gtftuUwnZTdqwfBSFNC1wjv",
  "key12": "3ZGXshaQsCYzLLwX4opdZ2uuT7CwxB1yCgvFNEk6duCCLLKhq9Sx7t3RTYSvhMjMYs5LAJcnWgLsSYecD8d3k8Mq",
  "key13": "4cT9PFwydh5gjkuU8BAiYkyu33Jj5gKDNiPiTRBhifjszjqpf8aHGYhXwYSnbRsMCpoGbWSVyi734QK3Gy1Wbyd5",
  "key14": "5QXHoQVQiQe4kdY5C6N65uMTEvqBcfXs4ywpFXSR8hgqR9jiq9eav8BtzeMmDLQhTFQc88GojnpXVd9b8iVhXL5q",
  "key15": "wxvJWLvVvdX8V24kQccAitn6XYZwf3yZu174Mb8dyJyKd6c98SZFfE6Xs4rW9qMiGQMgBLr572The4qxePx3VMV",
  "key16": "5C1to8JFAQWQ4QfBFZ8AitXvn3iaZF9Tgq5wpZ15FeU4Qi3CuXVB4uZd54kMh9R19FNcGwSB3xzT97TGyhgxSoxR",
  "key17": "562aELeaNdATpmYwrGVw4E8TCCfrSyCRWsPzHJNpSau7KFFh15pZeto8eAwAGcVQxeLH3AQ6bJGB6krAe5CH2Rch",
  "key18": "2CTiGiq12WUJk2K7v5AnRQXJzTaZQzeyQg7hqK61tjqeyH5wLe2G84fLo4GNADLwxPTGtxkAp1G8y26N22dpN4n8",
  "key19": "RCNGBdK1DsZmcKL1TjF9jDW9n6eEMjuHUhNxDPFH68hYYs5TQZEh5ErGVyuxFcAgvT2FFHDR6oyeNZo7oCpwpPo",
  "key20": "4P9KyBXnGSfA5Y8KwU7dxRHmaaxnJ7axZHiGNM2NAGAfRDjBqcs9qpxSsYKVkip9AWtf64a5fzMZHbnNz9XRbLoU",
  "key21": "32MxisAjDLgJhWiDs5WK23zqjQSQz1XTo7fgDdZbjYzgzgMNR4j8fh4bgtp98Fuhjsb7Kx4RTh6penQJ4CXgKCeq",
  "key22": "2vygLz1VhjdbuiNADFYsbqa8Sugq9YESA88M6qDMCCG1vMCp2oHQnN4bAmE5Uv3DGmeDhxCBW9n9rs4nAAckZQhf",
  "key23": "33ghjHXxHgrSGbeM917e68oFDhMvKCEyptxMM9AdMVJgzGHxgiwxZqJVQBaxDPNEcPrndn2zoZM4ZKoVpgFCmJ4j",
  "key24": "VBTsDUk6UKtEefxK2otSDXkiEmv8ADDAKE3JnPYCaxNS18M9c3jdFoc9DtNVbrZHjzEneJZKedo1koRXLWVdU2A",
  "key25": "bt9H5kBpQyvgmDPiPtcwcDWLJZ6WsDcmBMCkvXY5EjA8L74C5U52yVPRBVgSgu7Yk5fzs98zKegwX5pqqvF2sAu",
  "key26": "2XxyZCVw2XnDf1dvTNxufF2qf7dgBYHyuPQwLoiqRDvJ91agxZyjCXV1VZ87oe6CBRft6BeQHMfVH9KnBzhwtQ3U",
  "key27": "kH2VECbDriQwkaG9LFU5K9AADMJBBSeQfjWgWCTww6yQu47wBDBMbkNZP3eUNx13vwY2Gj1hVyPkaipW3ZDePGY",
  "key28": "3nggnHjCKq5q4REh8Wn9DpkCpiwg1zFo1si72n3ZFetvGz1dahreGPbpRwH1ftysYKPuut7RfHJoDhq6kGgQ85Fb",
  "key29": "2nYBze8xmAEr7ihKLfG4E2rAT8x9X5Xzt6xpEZZbGuhLfkovAazUb7Ww5hp6tVWEhMWJrntCwd52W3sjubizJYZT",
  "key30": "276tCRxBFWiqwYESxrPfoHaKNB5eM3z1kUNmx3iE8dn1R1eej7iWKt1MqUGAY3rw7MJuZcJ39Gqf4sJRQ12BiCLL",
  "key31": "34gqMi4CoWJuLRFfn75ns7Pg7nbDgmyLvMJ6xUWc1taqUtuMt4iL4iaVLikeLGFQSCeEC7RzE8HCyAGEJRP2S7TD",
  "key32": "3w2akoTH3rSdHSQiRfBNh5Qq44sTKhQabJLz8HxnhR9pusDh5pPz1FM8r3bUWSqigjkEKkxoTEXmhHBKM2PSzKbf",
  "key33": "3xgyEq2WTj2s6qjKWyz8fDo6X1Keov2wCqPeKS51ta4dLraAPMAsHxdoepTqRGH6wFSfBjZcLvHy9WxkEiKVgumi",
  "key34": "2fvoE9h3eiDtzdvYpCAmqhc1wgGE3PHSSmLGU3yqqzyRwcHPbRJjnhrdaQM4WyiEX62r1vgxDRdjoQhYhkfvUYet"
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
