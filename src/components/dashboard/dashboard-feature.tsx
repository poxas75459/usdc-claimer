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
    "5eorAeFmgnCZE12u7Npnb5JBZV7WizrYMq2jbndpJtAWLySbDfH6yzsDcRQmXNSYStCcckqv1aArR8Vxq3TkdaBN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KLVpB8FgcQqHEinP2kK8mbZ6YTQrRAXxRjpShdEeGpt2qfQNng8zpAtgWvhNFACjrL3xJdZKxBhZAJLKVbYdqSZ",
  "key1": "4tZWktsfntoDkaKVqwwRhc9d7oYLiSwHUM59ppu6KtcnXnVPJYiLEdj3yPaciXRQKCzQVfksMs79TRKpvj1Zv4zg",
  "key2": "5deqkNgoZz1DzWLS8X7LgySWnz6zzE31GtRsmRniRPTcU55GAbLYyMhG348SrSShfhWmor8h7Eo8f5XkTCdSvW2n",
  "key3": "S8b3APXoznFaJnrBHQ2cZQuU8wrVMLsAxfbvR15DsBLye13xjDaZe4tsEjGwWLBXyGDUs67PqN3jkgcK44xni5d",
  "key4": "3PWrpHx67yt6JhhJDeGWRqgvTJCw9kiVBCCY4rUkbcfK72R4uo9RG1pCGzg3kXSxcNe7eRwRCW6tY9hK73NRBW2a",
  "key5": "3uW3mfs9xtcEmZsNQGSVeAVcrwwihneC2WK1KN5YV3RBZATa4pWUJM1iVqXe8FrCtKZGBggEAYUroTGoWiAbU6HS",
  "key6": "4RciRmE1YsxMN5WrqYrjKDgdrcszoZ6xJgF2cdCC5oZjcoz5dxQhY4jVKNSEL6J3diAtCWjwsvNkBMs3qbrR1Gw",
  "key7": "KtkVpsesBywpoy4H41pGRQhXxvcrocerhiajTERs7zuyhZaPYiSKCKRpzdWRfawhTGKkxBnot4C7cEVN5nu1AN7",
  "key8": "2nPvcaoYzQ3DCTFSvXLC2WxMeHo4AcMs8NB9Kk5tEwPoq1D3Bzzbu1E4DfkLUpatrV8mqKtkrS8V7qoKuxD1YipW",
  "key9": "2qdEqQaMiDnwJusHnYoR6LdXX1ov61kUz6CRvG6i4dbbb12tZ2LSNYPffgk3oZMS99ZQjuPxFNioD7kHdM7vUei1",
  "key10": "2G5GxAXjJen6ZMfBqxqQRFVXKRm5vwyXS9GnG7srPTXp3YLstwGXTGuk3rqhWj4PvehppMEWmELANdGXBFbigPpF",
  "key11": "2CqNJQAZ6nomdNfF6ds3UHjviWF8QDhFR8zzwcCAgEPb2XM62ifdNjP652UKfrBcdatmP4HpMt75sq44jNW5QcnH",
  "key12": "3WMN7h7SC4YVD8D4kjxs9mDvnYhMnYte73UKgiWBbqavBMkV3MwLygRBrioeSs9Mhtp3F1CVhZYRcC8Zbqcf2B6e",
  "key13": "3LtaamRXiiQwkffewDp1K7sUGuPiRwSk1tgkaq89c5DqxxPsMF2PSWxusHVjWRjyHUv533VkFFwo772AMbPc27Rs",
  "key14": "4i3EyPnsk6aW1StLeSCDT9eY9xksxAoKMxkZR5PaJZQJGKsYjKeEYMXLxkywjSWNdyK1EKHYrCp1izMtJwtsYJze",
  "key15": "3zSJpsfLH1agTDX9tp4RkzVyfCksm1yPuJtJUb9STjZi8KrRibwKuBqb3ETQdBXbTN1GGy75G1YC6mfA5r4akQwC",
  "key16": "CPhDkUkBQPPBHgMvNKUwrDmJ753itbDDzW7VcMEhVW2rLbjG9mAF3THjSAjM4DeziaiCF7jgBLey2aCxoWCsFMd",
  "key17": "4Fkva5eDx11wXdQrDCRNXsQBpU3UCJ4mpv1VnMJM7b6AjBHbmyU3txCfSrEoPKWg36K2o5ZuFUgmpYcrtYKkD4R5",
  "key18": "2by6sPs1EU3meSRQLDqX1jxqiYP8pAzMmgjEnnghyDg3uMEcgKN2vBWRVfEywFkjyaDPTbwLthKB1gRi5kKHeocv",
  "key19": "2hF8CWEj9CRA89Pb5oTKCFyEB1frpwC3Uxaufb4ZLYJfZA5w6LEocpeRNww62PDKytXFvBWGtk73bMvhmYuAUu9w",
  "key20": "CBSCwS3YwXAy1B5c6zFRuiJHU165d4a1oBaqgDkGcCzHECNedKKNHNs28PiaPbU77u7zwhERqpizHbv3DkP3i4f",
  "key21": "5xBN61rZzZDWq35frVmzM61vLEt2vEJaZ7S1ncRVwJ6c1mWsCyk2PsfZvDB1SYy4EG4iZjDQWhmdbqAoJiJXTYGo",
  "key22": "5ouCYtR8z1SujxWg5mTW5Xhtj8QNXCvbRJcFcr83ZevHE4dizb9EEsvLnyh4czvoEczX1jsBJ4WseuU6CniJrfpc",
  "key23": "55UkFCffoT3HYvBkGrMfzrjGTMy9Qq6ZMtud3xB4S4cXsYzo43hEBgV4npvGjhoaYS6bQkn8RBFMT7ubstCKrVfA",
  "key24": "5PGoRAaPR6UwhPdqMBEeyAFC52PuYBfxLtmKAvRPM8RyfRNATqk6KHW74noKE8am2G9koodpMEi73qSyf3jpwUPP",
  "key25": "42s3AHSDNNNYx8ZKa2QPQqbT2jdVVZg6ynSrf3aYTWnbWnLLj88kwLSfeQAA5KuUxiDnLc5L7N6pFWtfVmWGQqam",
  "key26": "J65MWYpv1pg6YNyfaQF9iBZ5Uh2BaHEjNTXftdL3UGcLeKAbjaoDr8PBQeKb4LnczvvGDiZFn43uqGtt6XNBRtS",
  "key27": "4mrCvNHdpGBXed8hV9NGUCSbC5LKhLeVfHbJqzfqosLsLAmuyZ7CqYUYkjmQYW5EUGwMpkChBfM26mzMzfTYjz9k",
  "key28": "EdWacmibrqBbv1E227qJ32pTfmUC5RTNryK9W3iDBHcQM4qThPoJuBuFeGp68TQR9om1KeA7P4gvQ3auHpe3fK2",
  "key29": "2ezkrpgorr8RWhDjdrd3SYiB5DgADsr5kZPy65vU6Yu3XKo4mug5LWwSeeSoP6Q3asiBDmFUvWTsMddZ8gAXSRAm"
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
