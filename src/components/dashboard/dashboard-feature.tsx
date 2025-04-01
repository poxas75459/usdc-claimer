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
    "4Rg9MqUKnnesDaTbJaxpeSoFauDeKQNUvgHpAMbxRzFu6fK3gzQTsHQtnXxxbiMCmwb9gdsWPEjVbL5puWhbcTEh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wHG4112GFMiW6oVpo3kuDexiE5q5DyM2zQbsAZL4koZUqz2dLapGmyFHZBDoiEmEXvF1aiLCxJHUCky6iVzsjpK",
  "key1": "1291DxLJUJoGTuiAnwDMpCLBqBfPrD7HZoUsrnycTR1VpFXyMxULXa4a7z5rDdYBwD9SD92EMPu2oxsELSVZ8GxN",
  "key2": "3Wh9Um7TbZkFGcp9HDzMkJ9tX8MZQTnJzFRL1deRfGQRi8a71R9iPwpdtq1Y4K393LjfcjQhiMevGyVF6qQ3xmpf",
  "key3": "41bJJ4Kq5WRji81X86ku6nUf44WdnSRkH6YNE31cAWk1uWEMiJDXx27JsSpaSt7nRZhrn3vS9m4dfwAephMReFco",
  "key4": "2EJGukbzbaxFFya98k8PyB8oDxoLcoAU6yKZT8wLSk8r56nLcpYR4sUGfS8CJRXNjwSXber6LYskydfy4d2ne9oR",
  "key5": "3Vn1F1SdB2cop8NUUb7gFmewEJGDDHymU3Xder8Z8CiwWe5gmFS4zr7a3AmP1YLV3bZmZWYQWj21F7EcUw3PEeq5",
  "key6": "2jpgfPVhARLJpYSR1rMb19v5XtGS4ZEY7ifpDW4aNX1qCxjgRBH648JLcV8FyWfHMbqkTDdztxmFDCXhDCv497jC",
  "key7": "3djTajPmrFpQeCsSvhi4KPjhqXDFYVNvT3C8qeAiAW65XZTenL1FCztqziMNTeJtDKZzmG9iX8gbqEveiq3WJjJ7",
  "key8": "5aj7GTe2adHiyvNGTTor4P4s5upAGKFT2v8QmKeyvj3v6LtJ1sRJBcQGZLQdU7mwWmZuUYfLciKVxYpvABUUsZoX",
  "key9": "4puif7gQi7sSFFApnrDnUJrDSAozeJf9eGN3ca7yRDrDhCr4WiAd2gMmpoapepvcrntm9K2J39WsNitKxfx4um5w",
  "key10": "4oADin1DiBfKuXAtqXfkSch3jyCc1uDiefAj2npx8ufTTjaUmrGimrNWMJZwkUC7emxPTgn7jFEbiv5FdCnysvf3",
  "key11": "3SD1vd6cayb5SDqzEQpCBTYDPLUfo2esermCq8Yot2WUu6bwaU3TyLFAmybk5YLBYPkx3xckRbfefPeEzTjZvoPh",
  "key12": "kFsDFrjN8vSAu1yUzFyezRtD294Dob4BTPUshxiZYicVVXAW1A1WALx6j12Yn5KKopXAR8Efvi4Z6U8eL9S2CDn",
  "key13": "buDpvMVcP4hRNf51SA1B1PMjx3T9wz53zLfHEDjRqztdWpgdkFT6y1th8tiUWHTPxKY9Rfhnx1Kjg7332smvBJo",
  "key14": "3JrYCsFFJcvUDGFxkhEwYE1BihkyosSFBRXhQkKfm8gPhsJZ29XgLBn8713D1HpfNoPAHL1GAL3wzUBR4iyuvKGe",
  "key15": "3edY4haAiZ3AiDS52uBAU3sx6jgQYoeNrpBFhAPYnTTN8bBtVM46yxMW18MEH67i8ckkUbT3gargCKQuGJFm2Usa",
  "key16": "27PJZDHVXC6gJch3sQo9UDV4k6Sz5Pj51ZBAeqYvz1L4MZNDtwyr25Xgm7RR1Zyiai7UvPVYvm7xxTgGFqQXir5U",
  "key17": "2ZY8wQr4R9dYXgTbVukDVRZaWMYRc8HYeKmNWhpAoBho21FEq845CwX3FHrvZhgvSfb8CDnPoaWw3kJG2JoCpdfW",
  "key18": "5wZWDbY5euh1rmZUcSpjrQwYi3mT5rA6K5UKp6xtCjReYi2g3kzreD7Y8WP1ijLbWJiUxdXfjZ4GkJq2k6bPEbjL",
  "key19": "RnoS8x8ekSJmtRQaFRw3YudX7PsnD8BMCNRcTKgunrhXEkXRQnfmCX6yH4HhotACohgZ9M7gYYFcdj8SJVejwaN",
  "key20": "JnuhX5kaS5uwQJ9aXLTshMwsDzwqtSnBJ4A76QnUB9xWmKXhrMQK9obWtQhPTNxUkgUA1YpvexLWNQUsawkQyP8",
  "key21": "3TZxVdT7qrHL9Aa29RvPpoJ61WjhQ4CiWRMAK64trFiict3P77wBgCByGpuwBHyhXWJzeBs1PvUf8gf64HVwFBbL",
  "key22": "3ywac4bABj8JgFg35Ue4KXSbHJT5RZipYnUtTmAcUCmygbknRZph1URGvVtrnP1DwZNt6DjQMs873S3dDdwYbiWt",
  "key23": "4nekPN1zYpsic8bLfX3iWmLrJERYuir2TnXjCmTCM9G3btojv2dBMqS7df3erL8xozALChNKDBjHiQNHCdqxXBtZ",
  "key24": "41y8FeWacqS878Dimt8bUNSdJARZZ5JJnQehJ7qshJZoThTiV2zEH9skHg99aPY4WH4mQfDwYKRfpynHA8qbejBn",
  "key25": "4CsAVAMs2QqkUh6ZnEuP1QyT29F6gB1v3yYBpxoqa86SuiCiKMrMDV9geMySrcaoUz7opFhtttJGEwmQ6ZQMBdws",
  "key26": "YuzoVwgCoVGiSzEsX7UL4dNuCJXFhppviyHikWcKiTbuhuX1yXvfpVsZUogQjfaoxyU5RUpKSo14HbgEwErDH8Q",
  "key27": "2xk7cgHQutFznHgpjUCPurS9LDfQLRhhGpDhWzdCh3Q8NZk4gYTqW8xreLYNjqksANYvsQ2YxiCcyD8EdGUqGyQh",
  "key28": "37ah6yjs5W3E2oPySpbtnzhUacQTj2xk6LaUR4reCGXjLNhD2CHyXRsM8pJZpuLF3NU6WSMUwHrUWPJcS8coHE6h",
  "key29": "4ynngsBAHjJEJPX1RYcF9Hrd5nn9Bz6nFqqjem6TpFDfwucZzotBNJdatzFGjAT6oeCxmhvCkjfYVdrsgRJUbSGB",
  "key30": "5e2LymZKbxtw3KNiWLLRjigSH6F1v3QjEMqehbP7CYqoJv98to4HiypkCiUYBZRTJ16H8CTdcBtLb12971d9Lbbw",
  "key31": "sQwRovkxet67X9rPVRYvJd94MWyVdtEHiatPhcAvyxVGSxaMji2cAdB3TSgG9Ttz3MaNQyrpunw9Ki7nhRSzSa9",
  "key32": "8jKrsgLwEAdtrJxibpzSZLkZQc1fVPy8aaMdgxVEXrK469q5g4X65hwrxTx1UTXpLVKB2zqWwdq4CPZ58oCyk2E",
  "key33": "3ybLWqJog8YJgKrym9xeMT9jMaTogYHbuH7CDhgNTodpr47NDkwiW4TmmfKRRUK3U4y5VXxU42gircFiKP2WvGd9"
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
