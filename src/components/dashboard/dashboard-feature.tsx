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
    "2v8HBdgohJTq5F7rkRD8qGcn9JvQZj3qeLXNbvPX9KqJqZmdfkSmnUwdyz4QPXUwpoftT1qAAhuLDzWLt22Hdck3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Kwn1HGDkd4mzneZcGpAiRzfBb135NXG5AKnWXwMVWCDZqNkKqiz4fgmVDg9XqFickKxScXKUfEFpEULV7CW24A",
  "key1": "45ebwewd7qLkieg7xckZ9bZaxw8fGvV9WpDp1uwqzmdkK2J9utjgXuff1JqFqUDV2KLErBRKchzWvtQqL94p7ge9",
  "key2": "4H3iEi84zyzCPqYxevCUvBVcqyMt5wcXTvKZ7Tyctyp2YSizTcW68JQLRMoyozHwmGwj6QXCcjQ4aAT6eaSrvwoH",
  "key3": "ndChzfrPhAQFQnFtSm9DUyob8txexZ576yDoWFQJ5HTUxeLb5EPZ77ePLZfFp6UXvtSAFNNnhWxAjqcDWVVaiqC",
  "key4": "2XcANFz6FYZje9GqtLPNUxjrFnSuz6zysowXLGDKEG7fVqfNtTvhsd1VKk9haD7ES36c7q2jCNeGddvU1Ph4NyFG",
  "key5": "zytkVeKqAgdTGyM9kNhjE1V51UBCJLt2xwQRcETRGLkq66CcRSuNDJD6uHiEGSrKLxiXDeDSCx7eUVmWTNuDNe9",
  "key6": "2oXVMbxNRUsVZmBgMj1huosFMHWRxv3oefabwkfdaUzQSQD3MqqaS4ryVRoZCe2rnQWksmifhPbtpNpy1SsXnVwa",
  "key7": "ip2uh58uZeAe5i6eBXVNQCNH8KunukgxMja2g5g8sL5tEr6U5fX5UTtD1mHfSZnh3S9ZqDiZhPC1eEHAfw55KB8",
  "key8": "658qgfRTZ5FsPfHQjr2Ej7ZV8wdoFzFGxdgwpPSucJfueVKR88xGJChE3nbRk4JEkBL69MNvW3Q65gveEv5KGnvJ",
  "key9": "3ETkPEC1vgKoDjd3Hat7wdNm9ZukFZXCrNkwrHKNfRHxC4H4uCk5ZXuoakXMB1q2YLC9Nved2tREbeZTTN79fZtQ",
  "key10": "5YGT9FwsqU8Te7qrf6kHRtUWrrjdM6NDkWVC3cdbCUkFeXtaU6ksis2SewFdP2FrfAcEoXRH2RPRnPMZgGx7D4vF",
  "key11": "6779dRMoNYzugiXUAFh8ajmTeDaGbYUxjqFQGWWZ77EBKSRVHqzpCEJZzwVszGq3KP31PC19mQhgEMa5MXyoM2f1",
  "key12": "3zDoJDUg1E733jPzdro28JonYcB1yKZLMyDxtkz8otgvWGNGuU2bjmjTaszPrcnwSoL1MeVTojdMzgFjfi6bQe8r",
  "key13": "5MacF1SBT9JrNqHiVFPukpivo7Z1DFWh98VzctBRqXv2G6KioKwEgdSxGvsqUnxL7NEF1QiS23tGnzMpHJ3NPGMN",
  "key14": "ubviswdAAc249fWeKC9937hDKAJKhZPiEgkKFAhQnze12Lo7d9fAMdP9mbrbQVRyy8Jm7XdZmX5Q2SBN4NL1meP",
  "key15": "4RKKRbvHrLSoeUaYc2akiQV5SgWhfz8mKru3jNjr4mbQvvVwbmTHZGuLzZJR3dFJaVAj9cbAVmc6YWVnexjuN3bb",
  "key16": "3rur9NvoNQfxGXA1bqhVyLMr7Z7k2rS1CRzMAE9cNHLZBpwvxUR7ubQz5UaCKpmZPv474g2i6rW1813bveUmvxuz",
  "key17": "NMLJymSY9xBzKVda8CgSuwhXuP1oA9JAfM9Z3bCuxDudF76oyqDyni1gXBdd7A9TUvBPXs8RpZaoqs59M7nSMRj",
  "key18": "cNg3MmLPKnnRm5z2dkUq4tAuQb1mjFx7VvK5B1kYhBURr9steoT3ezoibyvk1SZMGvCSMjVkSUruqhiJUdhDdFk",
  "key19": "2kRe51GMUcTcGsQHYYAqXH36Ar5jp4BFw3RWWVfNnkbwWxqpf8QgRZ24kcW5QwCP9Xe21tuYBNm94jHy8MqR51Jk",
  "key20": "4j5Mt3E6UFLpmpEfoHwcntibmCKfL83f9zr6iMiHs12CRrxNphkpodXZ5AqHfsiU5icCY1DUbPZSj8UqAm81JV1g",
  "key21": "4KGv151PGqMFmjRTn8W3nJxYvqxHaLhYyxRrtdkhpm2Hwr9Fi9rZsWktYb6pfPU6inYrW1CkBpazZhsBQptRLN75",
  "key22": "2QmyEBiS4V7A4jnVgR4KjV7hnc3XEn112q4CmiVt81Y88K8bPekSdCM95Ai1hSmy3rEa3xNwUMhxXDX2XjyFR6u2",
  "key23": "4mV8fPrc593poSCwKGmkz5m2oAK1xHBb3qkt7YedD4hEudoj6njQHX8rQHaHCbXccPRUTuDkWy2Ei2YeLCzE9kiR",
  "key24": "uKLc9S96wyzNQsNdXRsxfxdfmEQ6Gn1dudu6gm2PxxVxsSoLfEc1fciTxEPShN8KxSKHYErjUie64C7QBjgf6Zi",
  "key25": "2B3D9JF6DQs2BxSSRy7N7frCSLEUm9Sxu2jHEihswxYsXydd3tGVER4Ttd1HzR9M8cxS1xw9HKU2khLnmY21XRkW"
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
