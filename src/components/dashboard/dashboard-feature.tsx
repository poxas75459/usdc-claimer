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
    "SpwMiDPoZ8Qku2d7R1LEDpcis15utesGF4Xm2GKaQdPH3htm63aLLquRZWBna1DYx42AsLPH1bR3oo9SX1i64dq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RHatx7fZUtuNNFDuJw1TUbzt2cyciALNKWBdnBBzx87ATUHhHZ3ongEzr1sWjYy4N4H4JWJ7Ex1BRKG7Xm5G8M3",
  "key1": "5zteHxXcTEkz8pmewWSfRxnu8P4GYW9i3t8puc6K3tt9c4MLYYthRMYDp11Y52zzxVeUYXW6pg4yBLtdJGxD16wP",
  "key2": "5ST9wtYdyyMMtTPUbMTQaoFrNCBNSULF5C6azD29ihSMNToDzHzBE5NJK3UE1xCFkEDgrtvaJ1XyiDFGrRwqJEvW",
  "key3": "1CMFkiM2sEsH85ASbwk7WaaCgCzoCF6zA6Ddxkd9BUC6yaYhB1h147tdyiammPyBryXxvYUisR3A3yVpYegBThV",
  "key4": "36j8qSd41fy7rxZkQCyQmqrhbwd362g6CtrT3jguy4QYChKtUbgMadxx1jDNGGowCN2hvP8JwXzFgbBKCm3FRGFi",
  "key5": "EEt6GmfAHvn356BGZ4nxedRNkpF3xM9BHt2DrcKc1gXJWCPQifjZbwo524CD8fPyjLz9ScsasUAXyDeQu7AH2yQ",
  "key6": "5Tw9t9FPAoew7NadqStv3A2KAvQqEwjcJyYYSpdKTH3jChV55zu3wRvVcGfUP5jJY3ahoWE5feUyJPC8xdyfpurS",
  "key7": "2Q2oBXUwfebPEeUnhED8YAr9Y37iSgBiCCkXu8c3yKk9kWBDbx82MdXpEJxr5mNg3MEgKwY3ViT1w3PHbSSiaGnP",
  "key8": "5nK7GRyexcNP5Xunf6nKTD1Lnusn73i3WRJqvRA1EUL3qD7BnXNPd3NM7pPAoBNzpCguXfv2NzoWMDMo5mCCh7dx",
  "key9": "V8XDFXUSR7DXsdFZxG68Kub5ahZZwdQnEdU1opx4YPL8b3eGJkLH4hDN7AnKJMXvD9TTezmJb1z42YqKF5L6dR7",
  "key10": "3etfHKWWtuHhjAXXKMZj49QqZvD1stLk4wJu1dVP2EPZZqeuUE4qEe23dotaQSjx78onk4tbyaGZ4wZsmVky3Xqz",
  "key11": "58gos8m6k89bgpAxVSnYmbUPwBSzqxaL2wmWJvHDsT1Z1CFQR2xHCSGrzvUMFpdRha7Kw9cgybHL1ppUf4wXMgH9",
  "key12": "4aDGMkNUxY3y9mqtG7ehrxp3s4QLuNcqZTbpTi4ryq3ecJUpeKie4RFDd1p652Vh1UEEppD7LK6RJ15fQPD3YP7P",
  "key13": "4A2dr49tCSdvQKAZAzBuaVNfTjPdxXBCpKpPLiNNg95NSEx5AhQ9dqC8wV6XED9ChJzHQ1Zyfh3mez116eED4fn4",
  "key14": "5snRSk2PQ1Dkef4cYnTiRw7tvKhqDVi4TnatrphqYXEZvnHeTAnfEi7rXUsFaXc2wQszxz75bGx4UsSyPXXARBH4",
  "key15": "ZHEG1so4QcGDNBeWgWbogmHRFQ8Hv51AwsL58tuGTZcvTWfizEKpX7EGrZerin6dn7LoWsjaZ9RPsFS5fqeX1C6",
  "key16": "5EqC57S8HyT5PFJZVuPYQq5AH5gqZeR8DCE9xSD8XX1atznCaMWWY6raUCsszqiph6sor995PVBPNDyNLcJVRi8u",
  "key17": "2YQUPHWUzwmEds6JNSaBWYfxhHRxwVCktuNNGWeEdJtP4wHvcxficmEm2KZNJ4a3WpXnaQafeLktMx3efF7B7Cqy",
  "key18": "2xFbbHb3g4uh5i9LuWJhKWj5SfQ98LVkobVZFPbgQ3wuipYrLybnYXShF9qMp39K9F7eiKvm3V7TDDDdbEKTG1Wp",
  "key19": "4HKVAbDaDwsHRVJVpnPZmbyavEee7juQSqUpGkNikT6S5tGjKY2McYFewjy3irJLQj4J6NwrRkYCESJebnRknEFN",
  "key20": "515egEeGqYKDFtCVAF1KVeL3a5mjBxBHTovMv9qoNU5uCVqXb3ja4zkBX1mMH1MkSC4MGhZSCcPU3yPFCkEg65EC",
  "key21": "53bf951dRkyxASkz8Fm6WTEp3evssSbD8XPG5j6ZZNf1rn48FoW14g1V3oruPKiLA7A3bNHbd1VQop7wuzGmBjpT",
  "key22": "4K3KnSocQd4nHgFx5iCcuCFRqxuaw1yvrsGY1cxczHg5CtPr2xVkqCrnxVchTpFrbG1RZMmPDGL6YsDFyLLfkAFC",
  "key23": "3n2C6BpBNe426vHLG3THZ5BRy6UfUNKGPsMiHsh9gmETLdoqjuDRRojL8JZHr4svuqyLqZJqjQUU3AkZXKmS2gZd",
  "key24": "2ZmDeY3Hsn8uY679Hm2bzu2Dn9AF5GUsuv8Z7BS5SCVYZS7bdXiJwRYcSxu3WimR5vXuP92zWixjsyQeMJoL9o7j",
  "key25": "5u8dNYdTLw2STx6L4A9kCY2aPuXNNUjoCXn96Sw97UC1ey6RU1Kyy6Af2U48eG6xUXgYf4caRmPw4S13RBF5mDCa",
  "key26": "4iHd1JKhXLkjEqitFFRav3gksGBBH4KTFYFi8ugxgq5zfYfU7C1WTzmgkwLSyj3eDE7xBc3GCpgQTaw8cqccXhQ2",
  "key27": "4RTsTzgvyESXvQs5sqbJhWuNNZaVuKTcdw6Tvf7tfvYutcZ1AGLpHcdSTohH9d5zL2baw2tBSqCCDQfvmiy1fJiM",
  "key28": "3Sxi1PTFn6jeFtGvWk5vh4i8bJLnYX4SaMucP7LezoL37or1MtkqhdckccjopzU7G9pW8nkosSGh7cPPm5N45r3P",
  "key29": "2utMuhpaAm25rd6GD5r5XpLGH6BAvGCY3qqQ2jpbasZoTQAVyXkAhSnTfeQqRPoQcBfkyJuYMN1rWCATEvsaJgwD",
  "key30": "r8LNh6kQ7XzFEBS4pjQeQHeMMQCWiQ8WR4fusEiwxS6tmPQBzdt5TcWgD5b1HeTQ3WM7NHfJTy6wxam65JZefUA",
  "key31": "RpMewqum4bmTFEPedyyKYtmv8rn2Pm2awqboDYQBoCzqY9YKkc2k3wS9mB2hfzLjLH92FPzhMLvCtt2tSbPpRAK",
  "key32": "3byvZWg3NxvXgtEsReJVCLk8Dyar9bKcfT1LxBSM2KUbjCF7mEXmHeVEzAsiqP9K95YrHJu8c9a4RqWPN9vGqT2q",
  "key33": "3W3pW1aH8fN7gUqntE2dosBPMBZh2LA26zdepAfRwPV48Jg5sZ5JvjSPPEyTykS6CtPSxru3NoyEuk32Btsc68HL",
  "key34": "4Bx3mx2HWzPBGTDybw3DgNWVvoP9RaxQSoZYT72upx91x9XoJaCmAXLDgLDVgkykh4Qamu8jQVQ6P9fCgbBBkA4u",
  "key35": "3FAVqu1nDoAKcT5EacXRpKBXXprxaaGMMijoXa8xsQ4RHRbFwfWBt7KgfoyC5fc5txZbJsySYoVcY9g9nuCmCQA3",
  "key36": "5Kk8K1zbBZ6KRHuJDTWNAxuHkajf41Q7Ed1GjjfytGhCsCp3DrZg7vHeW2LqvsaKApRxAFshaBXmigwWXHAw2ou",
  "key37": "dSG92RDSxeJ3Eb7AzoZuvH2TL3ZBbArf9RSNAnuj5nECh5B7TZPqkVTs9vP7H6fvU53n4Eqw3r2oUxhEehywVzQ",
  "key38": "3nVJqpgDfrQeyRirj5c1SkaNJWXpQnNZaDxHTQxMFZZPhsGq6SprqTuVpr6WwFZrSnfCBiyACd6EeYCwRDPJn6ts",
  "key39": "5uvX95kgoPgA8Vy3VbU6zaJMneP5yhmnXbFqTyoHYceWL89HJTsimdHSZ8kYpdpyHZJAMREqvGUJjFAGCL8yN9pd",
  "key40": "5hpFKjyjMcHsBXsD6R1kvJAJZ32oGs95y8MCYA7u3kHJvnjJPp5aEFb3Ue9yYsDf2WR74ABTaB6312TBR857wB8B"
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
