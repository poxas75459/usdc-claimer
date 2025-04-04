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
    "33anf6RJ7YiiAyeV9ARJzKtVZn1txqNATSzjui4Fnzd7mNmWoKXZJD2BeSf37LmwzT8SXYGhDwXrxDrBWtTDNsD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dGHhvhbxynpySkQGEMwAA8jG4XfTQEZLk7H2GU78Vx74uKou7YzZuyitSSogGQLnezWpEGUoxKwKsQLbh1EWkkB",
  "key1": "5AmgTofvjGQjySfbKSpz352oRLVLXw8gdg7jnu8WY6kMRNPPo6vB6vaANuPt5b52mCA25a2PhPb6cCuAVVoGw2m8",
  "key2": "AsPscZHNGYfjv3btVxHHugAJjcpu5Z8EgrMYuERerYprVr42SYLS484ek7RLjJ9vu2y6WbCLVCij1PZe4BV76Jh",
  "key3": "rxuZTHhWCsAkjyFsoBF9UH9hbRyYEennMAWAsaRzuHZwPRSdJ2hBvDTTWMnQbkRSLxC4CyAeiYqNKXgDJBx228g",
  "key4": "EH77NhV8E2USqMoJsGGRfrSBVnrx2xe2DXduEGeJTrdiGTbPRFdHL5UNXbnKy1YGxb9bF2PWy4aJCDBy54LUV9U",
  "key5": "3FYWdcswvMVCwV1D7KQhNsEEvDEFvHz79yED3xs17K3DG83MpRabYg5tDVb5tVETEomWfiwsBDWaioi9E6Q1A8W8",
  "key6": "5CWcHzeirmHWfiUa8Ayrsr6JuqdTSqF24dedYUbPZ8hLhrPpYQAKmBHew6Xz4DCiZRGyC9ZfFhUAyLELBRDTgN9E",
  "key7": "3148xQi9NomFrAB3Zv6WFnVu6khWVMGEmZyPay8JxAWNgFoPUDq5EZ5N3vaXy5HmkqZdybXxekZ3qv7ESouGxxkf",
  "key8": "3XC6Q3smfQTsMgTPHCP1VZJWwkDcheikAQr1BJLkw1obSZLP6xjtWJVjMjtf5xN3jztnndjgDydzF3Wz1TfmMUE4",
  "key9": "3jfDBepsJJxKo9yLUXZJXigwoPLLv5A7zzfworyz75adGeQQUJ2GjVuUuFxi34tbAMA37Krdcko2jGoHpEo3dUif",
  "key10": "3nT2vmxduFGp31BN96hCnxDSL9PDstYjZ97zyUt2WkjbFNfwWaDeXeCg9qoz6V8SCofWscYbCye8i5TKoxJi8xwD",
  "key11": "5PLys2uywjowbRCC9WSgBTJcnucaQ2MuCeyqTrra21UkqAWX5YuvHg7wKnFLieeGHHC7wwnCTJ7xbUW65ixkcDQt",
  "key12": "4vkzaK5WyrrTUyhqFefBY1R7eDWBBmQtUya8BwRMcDSK9tke845iAXuPCdFLjJk4MLSpHuBCFnFXbvyEq4vdkKi",
  "key13": "4tiVW8CnskWC4xABaVmDyLLrVvfxrwqYzJpwD4Z9x8EY975tPEznHRr1jiVtq8tEsaeWAYnD7AXPzxeY4LwHFbaW",
  "key14": "34TRGF1GjF7XrstbFrGMSxNvFdhKDdwGiFDG73ZewHN8SBSTBgVxoNccz1asivn4PkU7Xkpy11nMoyo5DbfFW3bc",
  "key15": "o9MXqDKbbS5w7FrfEViR6fFQT6i9FSKdV4gPthoeCibYUZDJfTVDLymU4DmW5m3RzfcxKMMHQdM18sSufNRHXyr",
  "key16": "5CAD1PvcreENnXpPuRL3pSP2kRaMdKBQMEMxr5YAuXa3ZdrenCnWH6Nrq97QjaYB5Sk7irh8S3uonp13yCdMMfWd",
  "key17": "2zaUzzuT2PkMyr9EjGMc4Dq1Uj5LaHBLuYppEd25n5kr3udfMdjjsTUuYUPuY2QVqzLPV5Ge3FnS11rwrmodj1Au",
  "key18": "2pHd81n9w6vJ21x8KshBrPvtPzEr7p16rGJartcoinxudqDps2xb95JZ7V8DyEZXKF37U23Aa5QLwJNJr87a8KHm",
  "key19": "5TeBM2BtKUuUfockJERPsYRHguVYAU5XVH7x4q5tWS7arqKoQzVNxcSxH8pcL2SibSt8EYY4uNwxsHUbvb8RXL8R",
  "key20": "4V6JWWGvMMem2vqbjfYgq1cqGd8VTNm6JoWF6yDX18t3Fbe6ZSb4tgMgS8Exh5hayqV1XKPHCR41Ghhfkd1g7aCt",
  "key21": "2CuAGL9Fy3Hdfg8hBbYKdRCr9yMRco7XKZK5FvNtyKkKEbbjSCBUMTdA5sj2xFYAQVhNmjXLT9iLwHkoiBU6F5n7",
  "key22": "5XiDXeeT1a3D4Dz22nqS4xSe3CZ6Z4yuBUUREngN46gSYDFwf1zEy1QSHj46EkWbQmCTBwpmrGHuiaRnMk1eCBE5",
  "key23": "3kSUzGz3d54StCySG4sRzB7tnkg7jv1PdznBPAk9SXvRQm3MSDA7dJY6Yy8nYZeZtWBD4hjzchL5Z91VWTwaMEiR",
  "key24": "5C5SYCWkSDzR11h4JWCawoqyy5F1yujqhPhBqxvRUwXWyvaGxeyM1pwJCPJALVfZSFXZhMN8yMYgQmCAFZe9m5so",
  "key25": "61LpEVzsCELZdiNcEdeVbtVGtKS84Xnwj8tfXqMe3BcahadHcsQJnxw1rKELkTiQT2r7zaimuegRiKbFFtxsiv3A",
  "key26": "53eBeAmQqEwWS4qih34Njv3FjCPPg4eZrzJQMNLpZBktQVepyBff5nGP2TyLkbXFfhYj8gXojeDNxFiG2DKpwbDg",
  "key27": "674NNkwPPkK6FM339aKYJQAa2oPysEfTXhfZo1e2a5vhvKuRf6xZqhMT2vn74WsS9fJPnuW8QzLHj2LxshGv1Vc4",
  "key28": "3WDktPogrw5xK9ADWkAmKRygoTjT57erM7HAHLQ5w2eoq4xNGRW8wyYDXfFGvPnTviPswaSXWns1G3wGQyCP8tLM",
  "key29": "4wnjokgewusNDEvFE4bbrexUnyR2DevZ6CEt7XyKvFbwJpCJeEx842vjJEjMZCmhYsLBguycRHecNH2LGkN9yRQK",
  "key30": "2zdXhozSAPNSXoR8F4Baj3v9YUKR2Xe8h41z6VWLSqugSiUUJzeMqivBzyoCfRmhBPrQKRcFBa5eh75J9c1HEUqd",
  "key31": "8aCFRfZa9oK1T7PBfxhBSuhuuTQgjub3TsaH3iQMVP2KUMZAix72r18z9GnoZJ7T6bALNm1SRFXw1LUZJjDWtL6",
  "key32": "5KPz7Ccbj6exdiwTcfirgHGyS6kuYWYaFig1zEqKNeSbmtvDcB99VnaZqFj2amvfZ86hp5kAhvkz3CpM1ESvrF6w",
  "key33": "2YxZY4i8M4XEJE2A9NPYoGT1HRLtP6eGiLsVJzN1mpvLo6xBzqNUtfxCAVELTuUEeqdHPCKSns6hVeom8wN8iDR4",
  "key34": "5RY4T2HiMWYWmdE9eJdQ1ZXSRkpE5jaKyht1wgtaF4df4WFVALU5ARfnYsz44MwyDoqMkFzLtfnEw1Bp9jrqX2oN",
  "key35": "3uye9FzrwYSq3ozuwsCB8TEFoey8sH7JXnJSscbSpU6CxA8ys7A7FQM5sQeUv1CgGcYjYLJXk6YWp712dAdLtZeE",
  "key36": "4FyEcyR318sqT84d3qK3MbY7r3kw2pBHANyP6wJ2LE3NXjxH6DBsprXqZ2c2QCr5a33MiRjV4CwCfwbB3H3TSxoZ",
  "key37": "5DBVzCgUZfdpLJUPk9i6Kov5uYbzhuj2ytSrYdNsbXTKaeJ5kk1JnNmTpSLqEkLVikX4qvbgVhuDXAEhghJNnRX3"
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
