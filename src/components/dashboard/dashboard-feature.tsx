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
    "4t4WK5eT1WNn4HLugymrLXp195VERZSLBWhmXugqjuvEAZz5oFA9wsEipjG94pfaD3eTeACgngq9c8fDxvitTDwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qNJfMatQMABSKJLT6pWwaVC2uoetSEbVDyHZQvhfQmC5fCtUhg7LzrZxcKcNg1Js71if3L4bWeUMvowvd85m1Ye",
  "key1": "TW6HVUNGEG9MzQrr8vvX711iUYUj44UPMBNBNPbHgA5RsaPyUFtw3FVY1ToP5x7CvKdT6tmGYoeMy3VQFJScYog",
  "key2": "8yDnggwpizkCK3mVB9LZEhzmNS5XMuktvm1ScTp8wgoEKCay1zZ39jC3EviNXvQGwQn1s6Qbr1mGxeo8F9UfRDc",
  "key3": "3stZgZHUXwEfFKxq9TJxjfAwGMzwtBag17ajYVbSw5Uw2HSvW7sLjwRsqCokcCFAxYiRtzddEvYWqaXkCN1dNjRt",
  "key4": "2gwvgVj7fsL5S3k5CYocZVuyzQwFq1tgguiS7YvRJQ4xkcY1cdwn29wgdJULudAfC4eSordgw1LSp3dxsWQpi9ky",
  "key5": "4MnW28PGswmzK4owym6Vqv5BRpGSu3Jdwcj1HxiHDsDLxmoCJgq7w2kMBNni3ZEiTUFDaLdnfEmQbDJKdt9tvkdb",
  "key6": "3K1uH67E1Nx3F9vTtof8MxDigYwYtYEGZehHSmjgW1Nc8rE1Tcr1xkSkMMD9o8LzBQNyzH1nQ3R4W1xXGvaK1kaM",
  "key7": "5HL2b9jXLzMcLmXPoAVHjXdHCQBeu8H1XPhEcRp6tsv9RRceJRJerjkAeovrBJwxfngnxraS13z1f4GwEdCeofgU",
  "key8": "KDTBXMtSpbQDdH7x71sQq5j8anUCS3VCAWDHTZWVsKiqHnGEm56jhoX8YjuGe2X7Q8J3jmkMWAsTTifd5Z6zdFj",
  "key9": "5dWscKzEuQB9RxA7w7YpPtva3PuaAPMvqXGdwihVCHCwhrUHkHJc662r1GHUgKFXm49i4N4JSXNKeKh6NiNSfZa",
  "key10": "4Qpbh1mBcMdKTXULG6SxAyF1cevEktRU1zoj23HpQdzc654LJig1VcdDWBxsBeB1LnM9RvD7p5NyT9bJHYgn39q6",
  "key11": "32oCxH1R1M7fcDr1PvAKn323oQwqZpAPVGmiMdz3yti9voBPdE6uZMPGBZHucHc5TaKC65wcsjVdC1aEpNNAp9sC",
  "key12": "2K7McREEffT6DXeuYMh8pDvZvnGgUR8fg2QbxupNprYUymEezdJnz5tPAGmFZRA5rsqsDV1QBZrtHQi39nEPLL8X",
  "key13": "2HopUNE23EC2nKFkmxBmMDmYkCToxkes51T49dKsY9RL73bV9rNHPV1859MG7HFkw9H4uSCdzHvpkncX5RRyrsqr",
  "key14": "4E9oFuyW8HVdf2C2VHPRYEXErSpzK7XRCgQR9r5gpYfNAvSBb6fqCwwR7D6tsijHj2JwvQFygy3qvevfQupSXnSv",
  "key15": "3tdgZkQhR81z3rHQiYjwCWJWZ8gmNJ1geVynveGy3uS2CntyvCQVDc3iY7nSPnzyEvtXHAmgn5nTa4hKMRq2UovZ",
  "key16": "4BTHChYqHREYzrS2Ge7PVGjLSAQNY1sMrXKERac4UBqt3nJso9rx9p13xW9rVbtgLCnFZjTSYooBhVyCuZQ31TSh",
  "key17": "4H6qCL9TDVtKgHDFLn7bCdF9HkB9sAEuFPJU2U3exw1a9RXGSNbdmMqK1WiUsRpAarCcurcTdrrhRonSnyC9WZFD",
  "key18": "5DXMgUrJXVGmVPc6RhC19qB3eRMSygtcUbFq3YzDRWrF2HzBNBS775gZxaMk16vBS2u3XPUQgDM3DFBwJyKXM1gu",
  "key19": "3PyYSFrWcJsqrBhNYLB8Zob15CTNadWy12UXm8itdZ6VtxbtPz6x1g6oXnzrbk2x3Ec1iqTx65wRVardaoTXoEyu",
  "key20": "oHuMhmJZeKug7yjLveEjWTCG3dY1q87Ncafe4z4bbz2qfTYyZeya46x7JSC1sphjaB85SuS5KejnPkXC8S2gQ7q",
  "key21": "3Nmqmps67k8UNohz94czEGcqdg26DDfzscgUnyWVKMT3tLjmnR2d8ebTmY9SMAPogpo5JzwKBguUY8mMjq2StTjq",
  "key22": "J3MJJt1AHugmMwMUJxetTzwTJaempr4dSTXhfQCLqrYwim3WzYXS66XDtYqc27dqX9sMz33EjSq8E6P1tKnGGk1",
  "key23": "31gZCH4Bqf8F1yWeScL6hhbpKj73CtN6KmV3TzkApcPLUT8b7QXAoKoLtosv2Q2HcFcegkgZvmA35mu5BUW3no2E",
  "key24": "2cKGN6mdeZ5BBZ4SPB8YS6f6QcJcDoHkN2fDq27vDWFPehXhKXpc2eLcpnzXRQCMuccoLTRJxPZ58AbNzBR4Trs2",
  "key25": "57sc7R5bidnEuoTSwecpFMzLknijkaNNT9178wYR5SF1bygdrRLE7zS4M3JVyLZQJVBAAf4FgsA5BqGft3uaV3Y1"
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
