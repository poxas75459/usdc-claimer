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
    "4u8d3NzDG5VNEq9Kt4jmncRU8dV5ccY8ULXWnvchJEVi4vGxaPCZeXvW59GZMVAR7YbDVmkxchrcwDFWHxdiE65h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TNg5haeqWZY3dRk8HiBp3QeNGy8uA2qFLTP4M8VZ9xykYBhTuNDrWn3Fo45eSCuZGyKTNuDPsi74QEc2LdUcbrN",
  "key1": "2aUxhAr7Hc3gJZhcnDadb8iX5APRM535hxd5txUzCoLgvsKhxEpqDrkeEynzdvmyPGfCL62sgWuoAG42nayxcUJT",
  "key2": "rDVWBS9q9Jr89HeBj2Ski1cLCuRUGW2YiW4Ye3wNf6FDU7M9WV7WTh93fwDNbQfAxUyMAnaUzBM6TXFEZ5dQPwf",
  "key3": "ju1GdhhWTMnH3nvKeva9CuNHvcgkYgdye5e2XcgtP1peYb8Vg1MZ5uaJAYSX8HyoeZmmqzicAhFbiWKtybcj74X",
  "key4": "52N4B6eKDh8MhceHD5k1k4ze35FvuhAfnrc8UvoNSV1MikY25AnEbxCTF1MqFVwf6vVLkcyrSiHqXEsZ8umcGpTc",
  "key5": "3HD2wB9ScdqHGfHECbJ2ohDV5ELsAZCu88QEgyVmLJEyek4JUHNcZ83WPKQ8rXJv2xuBQ42QkRKkJqsRYooYBVFm",
  "key6": "36M4ein7UirVbT5A9dkq762MtPbLmj2jLHQVHPNNDeSCDi9c9UeeJC4vMiA2ohfRwaujWGDLz5XkEHmiXzsLVpUy",
  "key7": "5P6uXzqpux1ZB4X73g4i9n5oAAaXWFFa25kGscbQPTK7REFzLcfDu4HhhAbX1VjN1iR5Tgwp1oAtCTSE7kfiZbWZ",
  "key8": "2i6q9nFnsStNT9n5TzegMaSZiHsGZBbmyawJ6eDJs11rEsGRYoTFXthjAsm7CwsueaVcuNmb8z1CxaMnoYQUiJHe",
  "key9": "31g8nNQcKYG3WQgPnLyFsQFLBxL5ScriQn6r9kkgUT9FWk9XdWukzN6h9y1dJe5tvGVZi36qfcadeu3CBAzofgWh",
  "key10": "4UpZtarzx2RLJhks3Q3oD5ZuL2LcDSkaxqLpvuBfD7rSg34kAGa3rRAD5dLimGiX94RnEo26C2iCYELPG9pEBoqz",
  "key11": "BxAhpneJVbUPQMgUXRd9rDpRqxt4sNcKf9V58PQEXYNTphZbvhEQEtnBMgcZ6zfWR2b7xMcuxnWyFRUav6pZvvM",
  "key12": "4L6fHPeiwwSWDMHU5YjWWRrJvuGdH3sQqvFUZMbb4aneEnCXPLLnfz2faPCdSzbyKVRFBP93u1QgcwnFDGetYt5s",
  "key13": "J5GDZz9MdqShkYzmbd7jk7pMUWqUXBWPnNcJ3MyvREWCexwqsgSa1xvoFEj9dGcyKiKcKbzKZ4bgsaWX3vYjWDN",
  "key14": "4kSV6nMYcY8zkZRYCtqPft4Rcs9dV5NiVVjkqH5DbvJiiWKkk5193NvH7o8bFSJQtd2FBQnaS5rCsxGgc2C892vj",
  "key15": "4si25cQjiT22b2zN4n5V6d7r1r9krYGEF1g1EcoKd73gBgpENnTnWqYrnPEDzGgJ1Xd4frxBPENigQwXDTNSXd2y",
  "key16": "2Lt4Dg2kNXXzXPz6WYYnpqaLbXMdh65TzLpsywdVHZ3iTeccRfRq8iAUFL6d2EBjLw6NHcucFv6N9BgBhTu7Vt2w",
  "key17": "45hrqWk5t2CGMALXLGCKC3TYnWevEWkiFFdk6EzVEGx1vLugyRRZc81LDPBput3Wg9XzCpycz9CeQUAk4jE8aoF6",
  "key18": "2LKqkd89DkGib5vc2R8nhF5E5zdbo1N6rE3BEQQgx91wA3DTk4Kij5ozuiDuEjq8ToxisEkBEVGZ58VYitWJCvF2",
  "key19": "u3JYg2VTkKwnPdvGivGAqTuk2MRkqLnFmJ5NXtPpVJVbUPmDkDEkSFrBeAH3HKT9uvzd123aWBbsMg2Xonp4fA6",
  "key20": "3Xvg8eLyr1dQswttcjohbxZMagfuT4tk7bPm54rTS2noGbrLn9yv1XP4wiWxvyiq6MkSbyPiEErbkbHMtioCQw9s",
  "key21": "4WqHm9gpwJqeZRbay3QEjRzEFXXCAmCWzHT4DGugUoc3nFz66h8UAgMPVxLwYyQJmNgYtdC8mR6GeisjfTPx3j1C",
  "key22": "34GsctWEeptz1JXSS43xVTG7yieYbMRP3guvSjYiDG1eSc4JmUQJYFYxH2nBQw7NWtzrLyJkBq6rgoGYRZ3RZNRz",
  "key23": "5VbZsTAD5RZJUHVc9k77DYiefMprTC1fuev93SriYxcebGjaPNk63D4Bb6mKFC6CKaiYSPpkk4a2o7i9iMgZDLSd",
  "key24": "GoQNZh2GQNcFUtgaBcWLhcPuGTPoJf6vaic8TpdT87QLsYWNHqJ8hMCc8YPwH3oHvhBwpyM2DAbWMoSSxSjAxND",
  "key25": "5U3dQWRgfnwStE43i63KWY149BPejSrrNx1h5Bn7HKH5D5VpFNu9mZC1R2stu1yXnKpSCDs4qJsDxnbHaBdh8tYA",
  "key26": "z3eZ7cta2nAwcK6MHxWRKtbdvS5enrnfHQqtU4BtNYnvnVF1RZzGwDgVjioJeW98U8XLspfLwuzsrqaGVCYRwtw",
  "key27": "2isVRGjAhPNZp6VAs7fs6vvVRhvKfhyFVMhN7quedVjaSYdS1eXNgVUbUEHyAFbPo5NK6wsFYsp5WVoumsgBhxU5",
  "key28": "47cF6Mkm81aUHDxdwsF4RwPbpketphyzFN77DhFMMLqstQA4eAzVinboyMt8ndDr2Fm8pbkcwNxiuwGr1cQAC35v"
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
