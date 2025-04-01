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
    "3rMzBKxaTbHNio33JrDFEZR4TMXNd3gAKfaNkyEZMozqfKJDaPK3qs15Wbzb2bJScrd53z8xWbC1M2yniGHyibc7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SFpjUDGjs53HCAWdmr76ZVs8TpxTF9cSg1SYG5ivsCHwvH9fLA497NLEMuEmM8auXTNBRnpQxU12SGMAdFWNKuz",
  "key1": "3UqcEw522yCCNCAzT1YfhAUoFLWe2EiBwfsiapxnWyRp3Qunp2dmbiWyUrS67N6yd4QiPjPwUFMZztTVSSn2AuKV",
  "key2": "RhAEFAMhZvbLUMc74F6Qjfzp2Kw43hYDMCmViL4PoNpqsWXidebWAjojS3r2wJaGvxgZSZ7nsZhqkwi4pw9vrdH",
  "key3": "5qdUi7r8V2s4ndnAwANYsEmC5iTFn6pBLezfbXb2BHWjKSaHLh8uS3Pmqxa2AoEFKdkyFbLt6VjJ99QDr4UtTMgr",
  "key4": "Xw46FQkNbyYDqU6Gpfghx8H8fjEiwW3hZgS8SjCdKUtGv3MUoUieXe4LM1b4YD9ho181fcoKe9CwAdRabaHTkbD",
  "key5": "3a4FDDxgPiBxFHKsjDy18KQtDC1bnjEjkXasMsn9v8i5V23UQpqRw2vyd9We6pydX7nEmYZuPSmWHCSxCtrC2CdA",
  "key6": "Gwxq5eNWYZ6hJnqW1BUvqFUfhr4BYozjTH1UuuXHXs7nF36WNf38byq6adRq7JMCS47odqD1F3xPtuusey81vYZ",
  "key7": "5JjwNfbc2ZoanA47oo9wfDoQ9pAeE63yQdkHD4w8SmX9G2iDnQWE4crJ3auiitwEZ6U3qTi1km42WXJg9wedUnUs",
  "key8": "24Fet2HVt54Ufh3AWRYTES5ATAwpgSADkQi7PGTYg3TbFhjKBQzN3d6st3x8FNHVWVSpL6FiLCTZoM9iXAVprJ2K",
  "key9": "2Vie7z1hBVCza7ccKLydYC1DNvREjXLq9F32mmFsQBpRVaCXXX845ZqcpJ2fKzSAXQbwZiD25GLw7U8TfvvJC3Qu",
  "key10": "CacpbmcYa8jNUG54GuvQiA5Dzw2rwqxP7UJWfA8MTX3beKxJzwm6HLU4LSzCmVLCRhX3mAirbFxZcg9fqw7wSWr",
  "key11": "5XDnjxRgnUCMgWHKxKx63JPSU13Ve5qetHj5Z1615idDepR2XA3byQ4PHMJZss8xwTaRqcrdWWSbLckJm1v2VyK2",
  "key12": "3v1tiwSnG8XeSpkArcnAwDZHqhW48SKXtgNLcL8AQnuxTS2kHhJMkc1iLszjTZGiaqFxu3apTC8jrXt1HgjUZtxU",
  "key13": "61p3fttHkZYZsV8oi6ozoX3DVVdvhiBCFkwuWopLkfDS74ReBRpPGcpU5qc7J2VN6ZsRtN1mcWvkqBZy1dm2UVTq",
  "key14": "Po2eC7tLhYEWv3cJciMcWAEaA9ZdkVhidLEepZKT836c2bDGh9RuiinUDa4unN3m8jBd98KXHpB5whf2VoBXG4c",
  "key15": "yATp3UgKXmyiuUNH8vf9hd9strhJXhewMBh5JmGiCF5SoyJWx7XQi5ki7JX1MSotstZqnr2fjxoZgbB7btqAcFf",
  "key16": "5sLMhUAp66dycib452EPt2aLyzBPAFQuQii8MRZCBdwWim3pwUAoHX9wemF13ctftZrK2A9iVS7YQNeWG859G2ST",
  "key17": "4CRHDPeYXUQ4YDGF33iBkMPTVW4GEPPjvH7LG7iWau82Grj6rgJNEHFvVc38QLuL8yDs7wYN3TGDg24s6mF1RdxB",
  "key18": "QeDSFTZcjaeBksB6fa8EaqApoNFTQiZCfYYaeCVMrGJxpe6n9v5L9TD8rJPuT5HS8y2s7xNxjnSWmyhbWea6KTE",
  "key19": "ZYVLKs8f2AWSH6G23LxXNKEyVibgZDEEVAW9MUJctUs9Es6wque8TYCL5TLDdbzjrk8vKeyWpAkQPivhW5xShhX",
  "key20": "do8rYjk6NTh1B3NRwEvrzwsBweuuZSMAusjTGiakoRyogEU8iCE6QZS7BkJd9ZrxW7HAE2UySiTE6RDMdNQ2GKC",
  "key21": "2NccWL3zeEp5XA2dYPrPP6CWct6xiAtGnyMQjDSZjjpqSTj8As7hSpkPJm5c7SoGzJAy1UA29H3s6idZWdrnJ7Qp",
  "key22": "38Eq4PMsmecGBWmmoH8oz4ABunkgBTUtaErkEHcPFPupm4oeTFrGjnf5kopvuxsDWW9RRYJJ4pcjCLaStLQ4hLdt",
  "key23": "2U6TVWbHUCSGKi7zyuGx4YqV16cyM21SxMbmwcM9bud8cr1AiagfToo1Az42WnUDkHCiMfiHUGfscjQqRjf5BNMs",
  "key24": "3yJxNXgqREp2q5SKes48gW2vdaiNSbCmnz9BneMo9LK6YxeQVZVNkmttbaA31Xo3sp8uUM2X2euUWbotKdTUCi9K",
  "key25": "FH92GBEcnFsXyYXfpq3cuVUj9Fimf91Rgv6JnerZ54rbPxgBj2Gk6DBU7QqRiMBvDnieSXmdQPpnyXVdJc4jwHU",
  "key26": "3GPjfhZXb37vMG5fP5urvcPbHD4QeYJ1bxP1zS5oJexMgheJTDwskn95WC9MU4Nr4Mt5U1iQabehYtPvwow4QRHg",
  "key27": "4tfKZbXTij3aMCJGHKRzd2erqjNie3AY8C3BevvcL9NQAJvC6MoQkfonNbj3GBxV8e5RvXGfzeyd12y8ya9yKGrA"
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
