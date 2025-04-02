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
    "4AV1J6oegzFRUVYkUbu6pycj35CzoTafAGqJEjD6uYfjVCebWfLNiQboSRpVSpD8kEv51qeTWu5dBnWEV7WrXwFy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YKaYeH1PqRK6B1zm1ynb23qFkGiDW2Hr2HiakLReJL2845grEFPGVdS1meZ8vrBi33YE2CrCuEc28Ya3AcML12u",
  "key1": "4idUuLUPfWxC15uj2PRf7UaCuGXdWTfjQK2xmaAnP2QMECtuojQNAHqePv3rBxUEVKKMpu6kycWuLFDt5Z3gFe2F",
  "key2": "4VS55MWaxV3EX79rAS5ForxZcq1qmejWCZzXy4mBXSojVUVX7dVtZsoGXSYhsrJoqggiEyv67A7gMGf5fisddn5Q",
  "key3": "2Za24teB2NCmSdns2b48jKn6eyrKzyVGDRuyi4gVixxTwtsUU8HY32q1W35ozaCD7KNyb6jTPw1f923XCTP9PLzN",
  "key4": "4Jo2dKzv2dyB3byV1w86kESsn1einmmZLTeTRBhZMHpVQNwVWfFcSQqmNcjaXDzesjHzTVw1B9N9GrcaookjozhL",
  "key5": "2jwCHo4M4eMT8vAyJtF89eU4pdnRukgtdsfExf35XD3HxAW5oMh2rWcJ79FFUTQk6QqCemDdFGRgVNYzXP3dkd2R",
  "key6": "3vC8W4SgWhnnKAQoYoZv8iBCkeXLKHfvDPZGMrDN4o8sHpuZLyH5uQE3kEAJgQz5qEaSDPTB9iiACZoTnA9LCQt6",
  "key7": "58w8vqfy8L4ko6RZXfo5mHk5k8dt4FEGeUjusaY8iMEfioNrqAaqE8svRpyLdkgM2EiNR88CJjHtDqG5iDhdZ9nw",
  "key8": "2Ha4CbdH7Fv2UZ8V7Mnrqz7RuA4qBvJG9BGQME5b4phtzCYobJFEF73hR98CFY2zfzpiZFSLf7E2Rc84J35bSDQR",
  "key9": "5hbFftwTdnSjQToKYinfGZ7UUjUrs4tdnQgdmgpWYxjskwNf9c6WUbS9yXBfkibM8R47E218snoN2Bedo3p5qZD2",
  "key10": "33Fjpy5FiYcPu6QrXMLiQFRSaJpKfTZJGLatjknnqMfYZrrztkooq5FpAuaqr5vuSZ3qXgPBe5LNshtCXN4zUwn7",
  "key11": "5r5Kwu7tWHjcGB1rpCRu9hZ59w1eBQ9rD51NjH42hLEj8FewMPAK5ydLmEuBL2LeWcfyYkg9M1TDDPktUhJaC12s",
  "key12": "3W6JfqT2ojjphpK6e1oSMQWnvqcBJY67cPRAVVn2HZ2yEDxVZ2AAyQmhb3nG7AX7rzhnhLt2Ed9px8tED1gTfZ8C",
  "key13": "54rUvVp3haRr6eRAK2eXdimskH91KqAwwM9Low5wXZuo2BDsD9WMj7A9rj5eYu56Puamq2tc9rd4LKh7svrVaHjf",
  "key14": "2wbYXQLuy8FqfN55YxnGF4VQjqSeELzZQwB8EwGaZ4az7D5frQ7hJ377KoHiN4fo6Qetz1ZBGEtwsr5PLrcHFRSx",
  "key15": "56djejzhNfA2m1Xd9UTTbbjrUNhmqH5yh6wzp4hKbaqLCMaq9PUATtiGhqqFL38yAnVNBhMQJesybHyYvPDQUcnP",
  "key16": "eWWqFrNqoLXsnTS85CY2QbiaseAJawRpt9zPL4r95r8FYKqxJeeAR32AMpcKP2eXFuMzv5uMVuS9kgpEFiABsmW",
  "key17": "2dzdtPfzaDf3tXo3HUtFLAccCXum2uA4CyHRaCqbCTRTW8MxhehT1dDSDKveQRMjjYPnzeY39hfJbTQNYK3ZPTGc",
  "key18": "MAnwLWiQZK2cBoXtEWmB63DL6b5qfD9HxGYsHntYEXXZCMeRnQXr3Q2XSBYoZDy6V5ba4CueSj6oBR8dPjhj1CY",
  "key19": "2d1kKdahM38aAS3GjdUauP3bPooxgQagBi696NDXQ7AF4fQf1uWVSxiSWEVaArc9qsab55TbE7ML2omTeY1dRwDu",
  "key20": "3PrgdYF9u74LL2s8XG7D4PQ6vAu8DGkGSB3dzwniC9xQNAiGb2mxLTRoxECheqQc3DtwfmwZBQJmxGLQcCd8Gg66",
  "key21": "31s7TCi2AGAEqcmHGX5gy7Svx2QGbHssEDFoNbT3tLSaaSMy7FXk6gWtF1hKMA7ASUtr6poh2JkeimttfhdRt1AA",
  "key22": "2KAqiozuudMmK9HpEiT1T97mTLbWFLqMuPzVnQpRhpSZsGzxo8yLaDQyb4t25WQRVAMtZPEZv3r5P7dyvqx994Pf",
  "key23": "2c5PouDzzmc22VuwtN74SPGRz7e2kugy3LDwLTCqGztwhdRX7N8JFLHRr4TaZt7dKBiY2aujTqqh5FNeQhPtZCVt",
  "key24": "c1vDcLRa6VDEErsa8xrHKfAcYbDi13He3YV51ovDJv3G6nqC4W5VW881mT3RjDmUucJBpFjTouvSrhQQDvvaCmQ",
  "key25": "5ScPfZNA4Lg6FGMRhKNoN9vTbJFqXrsyB1zwHLGBe4PRgBqUSCP4mHYZLuHjTyzEY9tvvHXYghotWhBXr8Dya7XW",
  "key26": "4QEok3yuVkPFjBCuwbkPeCvzcDLGkko1RNQULzfxpTDpuLRuQZyEmRiSm79v7GX5sYb1LAsVjuaNYN75qUuWkZ6X",
  "key27": "2dEMzcUB7T9u744iBQ2Q26cEyFKVgs12pHDwxgTSBe1NHfN68f7JiCK6HRwebbXAUkJruc25Yva6HgFNJwXuu6xV"
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
